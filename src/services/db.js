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

export const readDb = async (user, router, data) => {
    const docRef = doc(db, `Usuarios/${user}/${router}`, data.toUpperCase());
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return false
    }

}

export const listDb = async (user) => {
    const data = await getDocs(collection(db, `Usuarios/${user}/acoes`));
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return result
};


export const updadeDb = async (user, data) => {
    const userDoc = doc(db, `Usuarios/${user}/acoes`, data.name.toUpperCase());
    await updateDoc(userDoc, data);

    await addAnalytics(user)

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
    listDb(user).then((result)=>{
        result.map(async (item)=>{
           const data =  await fetch(`https://brapi.dev/api/quote/${item.name}`)
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
                name:item.name,
                valueBuy : item.value,
                currentValue: valueShares.toString(),
                qtd: item.qtd,
                date: item.date,
                cost:Number(item.value) * Number(item.qtd),
                return:valueShares * Number(item.qtd)
               })

               await setDoc(doc(db, `Usuarios/${user}/total`, 'RESULTTOTAL'), {
                totalCost: 0,
                totalReturn:0,
                percentage:0
             })

             totalDb(user)
           })

           
        })
    }) 
}



export const deleteDb = async (user, data) => {
    const userDoc = doc(db, `Usuarios/${user}/acoes`, data.name.toUpperCase());
    await deleteDoc(userDoc);

    await addAnalytics(user)
}


export const totalDb = async (user) => {
    var totalCost = 0
    var totalReturn = 0

    const data = await getDocs(collection(db, `Usuarios/${user}/analytics`));
    const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    result.map((result)=>{
        if(result.cost != NaN && result.return != NaN){
            totalCost = totalCost + result.cost
            totalReturn = totalReturn + result.return
        }

    })

    var percentage = 0

    if(totalCost  < totalReturn){
        percentage = ((totalCost - totalReturn) / totalCost ) * 100
    }else{
        percentage = ((totalReturn - totalCost) / totalReturn ) * 100
    }

    const newData = {
        totalCost: totalCost,
        totalReturn:totalReturn,
        percentage:percentage
    }

    const userDoc = doc(db, `Usuarios/${user}/total`, 'RESULTTOTAL');
    await updateDoc(userDoc, newData);

}


