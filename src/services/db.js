import { db } from './firebase';
import {
    getDocs,
    deleteDoc,
    doc,
    setDoc,
    collection,
    getDoc,
    updateDoc,
} from "firebase/firestore";

const emptyResultTotal = {
    totalCost: 0,
    totalReturn: 0,
    percentage: 0,
};

const emptyPie = {
    cost: [],
    name: [],
};

const emptyHistory = {
    averageAll: [],
    dateAll: [],
    percentage: [],
    averageAll1y: [],
    dateAll1y: [],
    averageAll6m: [],
    dateAll6m: [],
    averageMonthDate: [],
    averageMonthValue: [],
    selic: [],
    percentageSelic: [],
};

const asNumber = (value) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
};

const normalizeTicker = (value) => String(value || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");

const fetchQuote = async (ticker) => {
    const safeTicker = normalizeTicker(ticker);
    if (!safeTicker) {
        return 0;
    }

    try {
        const response = await fetch(`/api/quote/${encodeURIComponent(safeTicker)}`);
        const data = await response.json();
        return asNumber(data?.results?.[0]?.regularMarketPrice);
    } catch (error) {
        return 0;
    }
};

const formatBCBDate = (value) => {
    const normalized = String(value || "").trim().replaceAll("-", "/");
    const [year, month, day] = normalized.split("/");

    if (!year || !month || !day) return "";

    return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
};


export const resetDb = async (user) => {
    if (!user) return

    await Promise.all([
        setDoc(doc(db, `Usuarios/${user}/total`, 'RESULTTOTAL'), emptyResultTotal, { merge: true }),
        setDoc(doc(db, `Usuarios/${user}/total`, 'PIE'), emptyPie, { merge: true }),
        setDoc(doc(db, `Usuarios/${user}/total`, 'HISTORY'), emptyHistory, { merge: true }),
    ]);

    await pieDb(user)
    await totalDb(user)
    await HistoryDb(user)
}


export const existDb = async (user, data) => {
    if (!user || !data?.name) return false;

    const docRef = doc(db, `Usuarios/${user}/acoes`, normalizeTicker(data.name));
    const docSnap = await getDoc(docRef);

    return docSnap.exists()
}

export const deleteDb = async (user, data) => {
    if (!user || !data?.name) return;

    const ticker = normalizeTicker(data.name);
    const userDoc = doc(db, `Usuarios/${user}/acoes`, ticker);
    const userDocAnalytics = doc(db, `Usuarios/${user}/analytics`, ticker);

    await deleteDoc(userDoc);
    await deleteDoc(userDocAnalytics);
    await resetDb(user)
}

export const updateDb = async (user, data) => {
    if (!user || !data?.name) return;

    const ticker = normalizeTicker(data.name);
    const valueShares = await fetchQuote(ticker);

    const newData = {
        name: ticker,
        valueBuy: data.value,
        currentValue: valueShares.toString(),
        qtd: data.qtd,
        date: data.date,
        cost: asNumber(data.value) * asNumber(data.qtd),
        return: valueShares * asNumber(data.qtd)
    }


    const userDoc = doc(db, `Usuarios/${user}/acoes`, ticker);
    const userDocAnalytics = doc(db, `Usuarios/${user}/analytics`, ticker);

    await updateDoc(userDoc, data);
    await updateDoc(userDocAnalytics, newData);
    await pieDb(user)
    await totalDb(user)


}

export const readDb = async (user, router, data) => {
    if (!user || !router || !data) return false;

    const docRef = doc(db, `Usuarios/${user}/${router}`, data.toUpperCase());
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return false
    }

}

export const listDb = async (user, router) => {
    if (!user || !router) return [];

    const data = await getDocs(collection(db, `Usuarios/${user}/${router}`));
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return result
};

export const addAcoesDb = async (user, data) => {
    if (!user || !data?.name) return;

    const stockName = normalizeTicker(data.name);
    await setDoc(doc(db, `Usuarios/${user}/acoes`, stockName), {
        name: stockName,
        value: data.value,
        corretora: data.corretora,
        date: data.date,
        qtd: data.qtd
    })

    const valueShares = await fetchQuote(stockName);

    await setDoc(doc(db, `Usuarios/${user}/analytics`, stockName), {
        name: stockName,
        valueBuy: data.value,
        currentValue: valueShares.toString(),
        qtd: data.qtd,
        date: data.date.replace(/[-]/g, "/"),
        cost: Number(data.value) * Number(data.qtd),
        return: valueShares * Number(data.qtd),
        history12m: []
    }, { merge: true })

    await pieDb(user)
    await totalDb(user)
}


export const addAnalytics = async (user) => {
    if (!user) return;

    const assets = await listDb(user, "acoes");

    await Promise.all(assets.map(async (item) => {
        const ticker = normalizeTicker(item.name);
        const valueShares = await fetchQuote(ticker);

        await setDoc(doc(db, `Usuarios/${user}/analytics`, ticker), {
            name: ticker,
            valueBuy: item.value,
            currentValue: valueShares.toString(),
            qtd: item.qtd,
            date: String(item.date || "").replace(/[-]/g, "/"),
            cost: asNumber(item.value) * asNumber(item.qtd),
            return: valueShares * asNumber(item.qtd),
            history12m: []
        });
    }));

    await resetDb(user);
}



export const totalDb = async (user) => {
    if (!user) return;

    const data = await getDocs(collection(db, `Usuarios/${user}/analytics`));
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    const totalCost = result.reduce((sum, item) => sum + asNumber(item.cost), 0);
    const totalReturn = result.reduce((sum, item) => sum + asNumber(item.return), 0);
    const percentage = totalCost > 0 ? ((totalReturn - totalCost) / totalCost) * 100 : 0;


    const newData = {
        totalCost: totalCost,
        totalReturn: totalReturn,
        percentage: percentage
    }

    const userDoc = doc(db, `Usuarios/${user}/total`, 'RESULTTOTAL');
    await setDoc(userDoc, newData, { merge: true });


}

export const pieDb = async (user) => {
    if (!user) return;

    const response = await listDb(user, "acoes");
    const pairs = await Promise.all(response.map(async (item) => {
        const value = await readDb(user, "analytics", item.name);
        if (!value) return null;
        return {
            cost: asNumber(value.return),
            name: value.name,
        };
    }));

    const filtered = pairs.filter(Boolean);

    const userDoc = doc(db, `Usuarios/${user}/total`, 'PIE');
    await setDoc(userDoc, {
        cost: filtered.map((item) => item.cost),
        name: filtered.map((item) => item.name),
    }, { merge: true });
}

//criando datas

function dates(dias) {
    const datas = []

    function dateToString(d) {
        return [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(d => d > 9 ? d : '0' + d).join('/');
    }

    var hoje = new Date();
    var ano = hoje.getFullYear();
    var mes = hoje.getMonth();
    var dia = hoje.getDate();

    for (var i = 0; i < dias; i++) {
        var outroDia = new Date(ano, mes, dia - i);
        datas.push(dateToString(outroDia))
    }

    return datas
}


export const HistoryDb = async (user) => {
    if (!user) return;

    const data = await getDocs(collection(db, `Usuarios/${user}/analytics`));
    const analytics = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const qtdStokes = analytics.length
    /*     const data1 = await readDb(user, `total` , 'RESULTTOTAL');
        const result1 = data1.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const cost =  data1.totalCost */
    const allData = []
    const filterAllDate = []
    const filterAllValue = []
    const filterAllDateSelic = []
    const filterAllValueSelic = []
    const filterAllDate1y = []
    const filterAllDate6m = []
    const percentageSelic = []
    const cost = []


    const datas = dates(1095)

    for (const result of analytics) {
        const history3y = []
        const allCost = []
        // Obtendo a data atual
        let dataAtual = new Date();

        // Formatando a data atual para exibição no formato americano (ano-mês-dia)
        let diaAtual = dataAtual.getDate();
        let mesAtual = dataAtual.getMonth() + 1; // Meses são indexados de 0 a 11
        let anoAtual = dataAtual.getFullYear();

        // Formatando a data atual para exibir o formato "aaaa-mm-dd"
        let dataFormatadaAtual = `${anoAtual}${mesAtual < 10 ? '0' : ''}${mesAtual}${diaAtual < 10 ? '0' : ''}${diaAtual}`;

        // Subtraindo 365 dias da data atual
        let dataMenos365 = new Date(dataAtual); // Criando uma nova data com a data atual
        dataMenos365.setDate(dataAtual.getDate() - 365);

        // Formatando a data subtraída para exibição no formato americano (ano-mês-dia)
        let diaMenos365 = dataMenos365.getDate();
        let mesMenos365 = dataMenos365.getMonth() + 1; // Meses são indexados de 0 a 11
        let anoMenos365 = dataMenos365.getFullYear();

        // Formatando a data subtraída para exibir o formato "aaaa-mm-dd"
        let dataFormatadaMenos365 = `${anoMenos365}${mesMenos365 < 10 ? '0' : ''}${mesMenos365}${diaMenos365 < 10 ? '0' : ''}${diaMenos365}`;


        var hoje = new Date();
        var ano = hoje.getFullYear();
        var mes = hoje.getMonth();
        var dia = hoje.getDate();

        //comparar a data
        let dataInicial = result.date.replace(/[-]/g, "/");
        let dataFinal = `${ano}/${mes + 1}/${dia}`;

        // const dataHystory = await fetch(`/api/quote/${encodeURIComponent(result.name)}`)
        // const resultsHystory = await dataHystory.json()
        // const resultshistory = resultsHystory.results[0].historicalDataPrice
        const dataHystorys = await fetch(`https://www.okanebox.com.br/api/acoes/hist/${result.name}/${dataFormatadaMenos365}/${dataFormatadaAtual}/`)
        const resultshistory = await dataHystorys.json()
        const safeHistory = Array.isArray(resultshistory) ? resultshistory : []


        safeHistory.slice().reverse().map((results, index) => {
            history3y.push({
                value: Number(results.PREABE || results.close || 0),
                date: datas[index],
                cost: result.cost
            })

            allData.push({
                value: results.close,
                date: [datas[index]]
            })
        })


        const selic = await fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json&dataInicial=${encodeURIComponent(formatBCBDate(dataInicial))}&dataFinal=${encodeURIComponent(formatBCBDate(dataFinal))}`)
        const resultsSelic = await selic.json()
        const safeSelic = Array.isArray(resultsSelic) ? resultsSelic : []
        safeSelic.slice().reverse().map((results) => {
            allCost.push({
                value: ((result.cost * (results.valor / 100)) + result.cost),
                date: results.data.split('/').reverse().join('/'),
                percentage: Number(String(results.valor || 0).replace(',', '.'))
            })
        })

        let objetosFiltradosSelic = allCost.filter(results => {
            return results.date >= dataInicial && results.date <= dataFinal;
        })


        objetosFiltradosSelic.map((res) => {
            if (filterAllDateSelic.includes(res.date)) {
                filterAllValueSelic[filterAllDateSelic.indexOf(res.date)].push(res.value)
                percentageSelic[filterAllDateSelic.indexOf(res.date)].push(res.percentage)
            } else {
                filterAllDateSelic.push(res.date)
                filterAllValueSelic.push([])
                filterAllValueSelic[filterAllDateSelic.indexOf(res.date)].push(res.value)
                percentageSelic.push([])
                percentageSelic[filterAllDateSelic.indexOf(res.date)].push(res.percentage)
            }

        })


        let objetosFiltrados = history3y.filter(result => {
            return result.date >= dataInicial && result.date <= dataFinal;
        })

        objetosFiltrados.map((res) => {
            if (filterAllDateSelic.includes(res.date)) {
                if (filterAllDate.includes(res.date)) {
                    filterAllValue[filterAllDate.indexOf(res.date)].push(res.value * result.qtd)
                    cost[filterAllDate.indexOf(res.date)].push(res.cost)
                } else {
                    filterAllDate.push(res.date)
                    filterAllValue.push([])
                    filterAllValue[filterAllDate.indexOf(res.date)].push(res.value * result.qtd)
                    cost.push([])
                    cost[filterAllDate.indexOf(res.date)].push(res.cost)
                }
            }
        })

        const newData = {
            name: result.name,
            valueBuy: result.valueBuy,
            currentValue: result.currentValue,
            qtd: result.qtd,
            date: result.date,
            cost: result.cost,
            return: result.return,
            history12m: objetosFiltrados
        }

        const userDocAnalytics = doc(db, `Usuarios/${user}/analytics`, result.name.toUpperCase());
        await updateDoc(userDocAnalytics, newData);

        const newFilterAllValue = []
        const newFilterAllCost = []
        const newFilterAllValue1y = []
        const newFilterAllValue6m = []
        const averageMonthValue = []
        const averageMonthDate = []
        const newFilterAllPercentage = []
        const newFilterAllPercentageSelic = []
        const ValueSelic = []

        filterAllValue.map((values, index) => {
            var somaValue = 0

            values.map((resul) => {
                somaValue = somaValue + resul
            })

            newFilterAllValue[index] = somaValue.toFixed(1)
        })

        cost.map((values, index) => {
            var somaValue = 0

            values.map((resul) => {
                somaValue = somaValue + resul
            })

            newFilterAllCost[index] = somaValue.toFixed(1)
        })

        //somar percetage   
        newFilterAllValue.map((values, index) => {
            var somaValue = 0

            somaValue = ((values - newFilterAllCost[index]) / newFilterAllCost[index]) * 100

            newFilterAllPercentage[index] = somaValue.toFixed(1)
        })


        //somar percetageSelic
        var val = 0
        percentageSelic.map((values, index) => {
            var somaValue = 0

            values.map((resul) => {
                somaValue = somaValue + resul
            })

            val = somaValue + val

            const res = qtdStokes > 0 ? val / qtdStokes : 0

            newFilterAllPercentageSelic[index] = res.toFixed(1)
        })

        filterAllValueSelic.reverse().map((values, index) => {
            var somaValues = 0

            values.map((resul) => {
                somaValues = somaValues + resul
            })

            ValueSelic[index] = somaValues.toFixed(1)
        })

        if (objetosFiltrados.length > 365) {
            objetosFiltrados.slice(0, 365).forEach((value) => {
                filterAllDate1y.push(value.date)
            })

            newFilterAllValue.slice(0, 365).forEach((values) => {
                newFilterAllValue1y.push(values)
            })


            if (objetosFiltrados.length > 182) {
                objetosFiltrados.slice(0, 182).forEach((value) => {
                    filterAllDate6m.push(value.date)
                })

                newFilterAllValue.slice(0, 182).forEach((values) => {
                    newFilterAllValue6m.push(values)
                })
            }
        }


        function diasDoMes(mes, ano) {
            return new Date(ano, mes, 0).getDate()
        }

        for (let i = 0; i <= 2; i++) {
            const year = ano - i

            for (let a = 1; a <= 12; a++) {
                var diasMes = diasDoMes(a, year)
                var date = 0

                if (a < 10) {
                    if (new Date(`${year}/${a}/${diasMes}`).getDay() === 0) {
                        diasMes = diasMes - 2
                    } else if (new Date(`${year}/${a}/${diasMes}`).getDay() === 6) {
                        diasMes = diasMes - 1
                    } else if (a == 2) {
                        diasMes = 23
                    }

                    date = `${year}/0${a}/${diasMes}`
                } else {
                    if (new Date(`${year}/${a}/${diasMes}`).getDay() === 0) {
                        diasMes = diasMes - 2
                    } else if (new Date(`${year}/${a}/${diasMes}`).getDay() === 6) {
                        diasMes = diasMes - 1
                    }

                    date = `${year}/${a}/${diasMes}`
                }

                filterAllDate.map((value, index) => {
                    if (date == value) {
                        averageMonthDate.push(value)
                        averageMonthValue.push(newFilterAllValue[index])
                    }
                })

            }

        }


        const userDoc = doc(db, `Usuarios/${user}/total`, 'HISTORY');
        await setDoc(userDoc, {
            averageAll: newFilterAllValue,
            dateAll: filterAllDate,
            percentage: newFilterAllPercentage,
            averageAll1y: newFilterAllValue1y,
            dateAll1y: filterAllDate1y,
            averageAll6m: newFilterAllValue6m,
            dateAll6m: filterAllDate6m,
            averageMonthDate: averageMonthDate,
            averageMonthValue: averageMonthValue,
            selic: ValueSelic,
            percentageSelic: newFilterAllPercentageSelic,
        }, { merge: true });

    }

}
