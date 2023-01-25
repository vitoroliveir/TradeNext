import { db } from './firebase';
import {
    getDocs,
    deleteDoc,
    doc,
    setDoc,
    collection,
    query,
    getDoc,
    updateDoc,
} from "firebase/firestore";


export const resetDb = async (user) =>{
    const userDocpie = doc(db, `Usuarios/${user}/total`, "PIE");

    await deleteDoc(userDocpie);
    await setDoc(doc(db, `Usuarios/${user}/total`, 'PIE'), {
        cost: [],
        name: [],
    })

    await pieDb(user)
    await totalDb(user)
    await HistoryDb(user)
}


export const existDb = async (user, data) => {
    const docRef = doc(db, `Usuarios/${user}/acoes`, data.name.toUpperCase());
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return true
    } else {
        return false
    }
}

export const deleteDb = async (user, data) => {
    const userDoc = doc(db, `Usuarios/${user}/acoes`, data.name.toUpperCase());
    const userDocAnalytics = doc(db, `Usuarios/${user}/analytics`, data.name.toUpperCase());

    await deleteDoc(userDoc);
    await deleteDoc(userDocAnalytics);
    await resetDb(user)
}

export const updateDb = async (user, data) => {
    const datas = await fetch(`https://brapi.dev/api/quote/${data.name}`);
    const results = await datas.json();
    const valueShares = await results.results[0].regularMarketPrice;

    const newData = {
        name: data.name,
        valueBuy: data.value,
        currentValue: valueShares.toString(),
        qtd: data.qtd,
        date: data.date,
        cost: Number(data.value) * Number(data.qtd),
        return: valueShares * Number(data.qtd)
    }


    const userDoc = doc(db, `Usuarios/${user}/acoes`, data.name.toUpperCase());
    const userDocAnalytics = doc(db, `Usuarios/${user}/analytics`, data.name.toUpperCase());

    await updateDoc(userDoc, data);
    await updateDoc(userDocAnalytics, newData);
    await resetDb(user)


}

export const readDb = async (user, router, data) => {
    const docRef = doc(db, `Usuarios/${user}/${router}`, data.toUpperCase());
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return false
    }

}

export const listDb = async (user, router) => {
    const data = await getDocs(collection(db, `Usuarios/${user}/${router}`));
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return result
};

export const addAcoesDb = async (user, data) => {
    var q = query(collection(db, "Usuarios"));
    var querySnapshot = await getDocs(q);

    var queryData = querySnapshot.docs.map((detail) => {
        ({
            ...detail.data(),
            id: user,
        })
    }
    );

    queryData.map(async (v) => {
        await setDoc(doc(db, `Usuarios/${user}/acoes`, data.name.toUpperCase()), {
            name: data.name.toUpperCase(),
            value: data.value,
            corretora: data.corretora,
            date: data.date,
            qtd: data.qtd
        })
    })
    
    await addAnalytics(user)
}


export const addAnalytics = async (user) => {
    listDb(user, "acoes").then((result) => {
        result.map(async (item) => {
            const data = await fetch(`https://brapi.dev/api/quote/${item.name}`)
            const results = await data.json()
            const valueShares = await results.results[0].regularMarketPrice
            
            var q = query(collection(db, "Usuarios"));
            var querySnapshot = await getDocs(q);

            var queryData = querySnapshot.docs.map((detail) => {
                ({
                    ...detail.data(),
                    id: user,
                })
            }
            );

            queryData.map(async (v) => {
                
                await setDoc(doc(db, `Usuarios/${user}/analytics`, item.name.toUpperCase()), {
                    name: item.name,
                    valueBuy: item.value,
                    currentValue: valueShares.toString(),
                    qtd: item.qtd,
                    date: item.date.replace(/[-]/g, "/"),
                    cost: Number(item.value) * Number(item.qtd),
                    return: valueShares * Number(item.qtd),
                    history12m:[]
                })

                await setDoc(doc(db, `Usuarios/${user}/total`, 'RESULTTOTAL'), {
                    totalCost: 0,
                    totalReturn: 0,
                    percentage: 0
                })

                await setDoc(doc(db, `Usuarios/${user}/total`, 'PIE'), {
                    cost: [],
                    name: [],
                })

                await setDoc(doc(db, `Usuarios/${user}/total`, 'HISTORY'), {
                    averageAll: [],
                    dateAll: [],
                    averageAll1y: [],
                    dateAll1y: [],
                    averageAll6m: [],
                    dateAll6m: []
                })

                
                await resetDb(user,item)
            })

            
        })
    })
}



export const totalDb = async (user) => {
    var totalCost = 0
    var totalReturn = 0

    const data = await getDocs(collection(db, `Usuarios/${user}/analytics`));
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    result.map((result) => {
        if (result.cost != NaN && result.return != NaN) {
            totalCost = totalCost + result.cost
            totalReturn = totalReturn + result.return
        }

    })

    var percentage = ((totalReturn - totalCost) / totalCost) * 100


    const newData = {
        totalCost: totalCost,
        totalReturn: totalReturn,
        percentage: percentage
    }

    const userDoc = doc(db, `Usuarios/${user}/total`, 'RESULTTOTAL');
    await updateDoc(userDoc, newData);


}

export const pieDb = async (user) => {
    await listDb(user, "acoes").then(async (response) => {
        const cost  = []
        const name = []

        response.map(async (item) => {
            await readDb(user, "analytics", item.name).then(async (value) => {
                cost.push(value.return)
                name.push(value.name)
            })

            const userDoc = doc(db, `Usuarios/${user}/total`, 'PIE');
            await updateDoc(userDoc, {
                cost: cost,
                name: name
            });
        })


    })
}

//criando datas

function dates(dias){
    const datas = []

    function dateToString(d) {
        return [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(d => d > 9 ? d : '0' + d).join('/');
    }
        
    var hoje = new Date();
    var ano = hoje.getFullYear();
    var mes = hoje.getMonth();
    var dia = hoje.getDate();
    
    for (var i = 0; i < dias  ; i++) {
        var outroDia = new Date(ano, mes, dia - i);
            datas.push(dateToString(outroDia))
    }

    return datas
}


export const HistoryDb = async (user) => {
    const data = await getDocs(collection(db, `Usuarios/${user}/analytics`));
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const qtdStokes = result.length
/*     const data1 = await readDb(user, `total` , 'RESULTTOTAL');
    const result1 = data1.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const cost =  data1.totalCost */
    const allData = []
    const filterAllDate = []
    const filterAllValue = []
    const filterAllDateSelic=[]
    const filterAllValueSelic=[]
    const filterAllDate1y = []
    const filterAllDate6m = []
    const percentageSelic = []
    const cost = []
    

    const datas =  dates(1095)

    result.map(async (result)=>{
        const history3y = []
        const allCost = []

        const dataHystory = await fetch(`https://brapi.dev/api/quote/${result.name}?range=3y&interval=1d&fundamental=true`)
        const resultsHystory = await dataHystory.json()
        const resultshistory = resultsHystory.results[0].historicalDataPrice
        await resultshistory.reverse().map((results,index)=>{
            history3y.push({
                value : results.close ,
                date: datas[index],
                cost: result.cost
            })

            allData.push({
                value : results.close ,
                date: [datas[index]]
            })
        })


        const selic = await fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json`)
        const resultsSelic = await selic.json()
        await resultsSelic.reverse().map((results)=>{
            allCost.push({
                value: ((result.cost * (results.valor / 100)) + result.cost) ,
                date : results.data.split('/').reverse().join('/'),
                percentage: parseFloat(results.valor)
            }) 
        })

        var hoje = new Date();
        var ano = hoje.getFullYear();
        var mes = hoje.getMonth();
        var dia = hoje.getDate();

        //comparar a data
        let dataInicial = result.date.replace(/[-]/g, "/");
        let dataFinal = `${ano}/${mes + 1}/${dia}`;
        let objetosFiltradosSelic = allCost.filter(results => {
            return results.date >= dataInicial && results.date <= dataFinal ;
        })


        objetosFiltradosSelic.map((res)=>{
            if(filterAllDateSelic.includes(res.date)){
                filterAllValueSelic[filterAllDateSelic.indexOf(res.date)].push(res.value)
                percentageSelic[filterAllDateSelic.indexOf(res.date)].push(res.percentage)
            }else{
                filterAllDateSelic.push(res.date)
                filterAllValueSelic.push([])
                filterAllValueSelic[filterAllDateSelic.indexOf(res.date)].push(res.value )
                percentageSelic.push([])
                percentageSelic[filterAllDateSelic.indexOf(res.date)].push(res.percentage )
            }

        })


        let objetosFiltrados = history3y.filter(result => {
            return result.date >= dataInicial && result.date <= dataFinal ;
        })

        objetosFiltrados.map((res)=>{
            if(filterAllDateSelic.includes(res.date)){
                if(filterAllDate.includes(res.date)){
                    filterAllValue[filterAllDate.indexOf(res.date)].push(res.value * result.qtd)
                    cost[filterAllDate.indexOf(res.date)].push(res.cost)
                }else{
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
        const  averageMonthValue = []
        const  averageMonthDate = []
        const newFilterAllPercentage = []
        const newFilterAllPercentageSelic  = []
        const ValueSelic =[] 

        filterAllValue.map((values,index)=>{
            var somaValue = 0

            values.map((resul)=>{
                somaValue = somaValue + resul
            })

            newFilterAllValue[index] = somaValue.toFixed(1)
        })

        cost.map((values,index)=>{
            var somaValue = 0

            values.map((resul)=>{
                somaValue = somaValue + resul
            })

            newFilterAllCost[index] = somaValue.toFixed(1)
        })

        //somar percetage   
        newFilterAllValue.map((values,index)=>{
            var somaValue = 0

            somaValue =  ((values - newFilterAllCost[index]) / newFilterAllCost[index]) * 100

            newFilterAllPercentage[index] = somaValue.toFixed(1)
        })

        
        //somar percetageSelic
        var val = 0
        percentageSelic.map((values,index)=>{
            var somaValue = 0

            values.map((resul)=>{
                somaValue = somaValue + resul
            })

            val = somaValue + val 

            const res = val / qtdStokes

            newFilterAllPercentageSelic[index] = res.toFixed(1) 
        })
        
        filterAllValueSelic.reverse().map((values,index)=>{
            var somaValues = 0

            values.map((resul)=>{
                somaValues = somaValues + resul
            })

            ValueSelic[index] = somaValues.toFixed(1)
        })

        if(objetosFiltrados.length > 365){
            objetosFiltrados.map((value, index)=>{
                if(index < 365){
                    filterAllDate1y.push(value.date)
                }
            })

            newFilterAllValue.map((values,index)=>{
                if(index < 365){
                    newFilterAllValue1y.push(values)
                }
            })


            if(objetosFiltrados.length > 182){
                objetosFiltrados.map((value, index)=>{
                    if(index < 182){
                        filterAllDate6m.push(value.date)
                    }
                })

                newFilterAllValue.map((values,index)=>{
                    if(index < 182){
                        newFilterAllValue6m.push(values)
                    }
                })
            }
        }


        function diasDoMes(mes, ano){
            return new Date(ano, mes, 0 ).getDate()
        }

        for (let i = 0 ; i <= 2; i++){
            const year = ano - i

                for(let a = 1 ; a <= 12; a++){
                    var diasMes = diasDoMes(a,year)
                    var date = 0 

                        if(a < 10){
                        if(new Date(`${year}/${a}/${diasMes}`).getDay() === 0 ){
                            diasMes = diasMes - 2
                        }else if (new Date(`${year}/${a}/${diasMes}`).getDay() === 6){
                            diasMes = diasMes - 1 
                        }else if(a == 2 ){
                            diasMes = 23
                        }

                        date = `${year}/0${a}/${diasMes}`
                    }else {
                        if(new Date(`${year}/${a}/${diasMes}`).getDay() === 0 ){
                            diasMes = diasMes - 2
                        }else if (new Date(`${year}/${a}/${diasMes}`).getDay() === 6){
                            diasMes = diasMes - 1 
                        }

                        date = `${year}/${a}/${diasMes}`
                    }

                    filterAllDate.map((value, index)=>{
                        if(date == value){
                            averageMonthDate.push(value)
                            averageMonthValue.push(newFilterAllValue[index])
                        }
                    })

                }
          
        }
    

        const userDoc = doc(db, `Usuarios/${user}/total`, 'HISTORY');
        await updateDoc(userDoc, {
            averageAll: newFilterAllValue,
            dateAll: filterAllDate,
            percentage:newFilterAllPercentage,
            averageAll1y: newFilterAllValue1y,
            dateAll1y: filterAllDate1y,
            averageAll6m: newFilterAllValue6m,
            dateAll6m: filterAllDate6m,
            averageMonthDate: averageMonthDate,
            averageMonthValue:averageMonthValue,
            selic: ValueSelic,
            percentageSelic:newFilterAllPercentageSelic,
        });
        
    })

}



