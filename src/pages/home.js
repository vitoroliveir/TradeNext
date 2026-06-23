import { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar"
import { listDb, readDb } from '../services/db';
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react";
import Welcome from '../components/Welcome'


import {
    Body,
    Patrimony,
    List,
    ContainerCarteira,
    IconFaCoins,
    Total,
    Graphic,
    Valor,
    New, Card, Title, Content,
} from "../styles/home"
import Donut from '../components/Graphics/Donut';
import Loading from '../components/Loading';
import TopStocks from '../components/TopStocks';
import Carrossel from '../components/Carrossel';
import { isSafeHttpUrl } from '../utils/url';



export async function getStaticProps() {
    let results = [];
    let results2 = [];

    try {
        const url = `https://brapi.dev/api/available`;
        const data = await fetch(url)
        const datas = await data.json()
        results = datas?.stocks || [];
    } catch (error) {
        results = [];
    }

    try {
        if (process.env.NEWS_API_KEY) {
            const url2 = `https://newsapi.org/v2/everything?q=economy&from=30/12/2022&sortBy=popularity&pageSize=26&language=pt&apiKey=${process.env.NEWS_API_KEY}`;
            const data2 = await fetch(url2)
            const datas2 = await data2.json()
            results2 = datas2?.articles || [];
        }
    } catch (error) {
        results2 = [];
    }


    return {
        props: { results, results2, /**resultsStocks**/ },
        revalidate: 6000,
    }
}


export default function Home({ results, results2 = [], /**resultsStocks**/ }) {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([])
    const [cost, setCost] = useState(0)
    const [result, setResult] = useState(0)
    const [porcento, setPorcento] = useState(0)
    const [retorno, setRetorno] = useState(0)
    const [loading, setLoading] = useState(true)

    const formatCurrency = (value) => {
        return Number(value || 0).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        });
    }


    const list = async () => {
        const uid = user?.uid;
        if (!uid) {
            setLoading(false);
            return;
        }

        try {
            const [walletData, totals] = await Promise.all([
                listDb(uid, "acoes"),
                readDb(uid, "total", "RESULTTOTAL"),
            ]);

            setData(Array.isArray(walletData) ? walletData : []);

            if (totals?.totalCost !== undefined) {
                const totalCost = Number(totals.totalCost || 0);
                const totalReturn = Number(totals.totalReturn || 0);
                const percentage = Number(totals.percentage || 0);

                setCost(totalCost)
                setResult(totalReturn)
                setPorcento(percentage)
                setRetorno(totalReturn - totalCost)
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        list()
    }, [user?.uid])

    return (
        loading ? (
            <><Loading /></>
        ) :
            data.length > 0 ? (
                <Body>
                    <Sidebar Page={'Home'} />
                    
                    <TopStocks /**stocks={resultsStocks}**/ />
                    
                    <ContainerCarteira>
                        <Patrimony>
                            <Total>
                                <h1><IconFaCoins /> Patrimônio</h1>
                                <p>{formatCurrency(result)}</p>
                                <Graphic>
                                    <Donut />
                                </Graphic>
                            </Total>
                            <p>Custo   <Valor>{formatCurrency(cost)}</Valor></p>
                            <p>Retorno <Valor>{formatCurrency(retorno)}</Valor> <Valor>({Number(porcento || 0).toFixed(2)}%)</Valor></p>
                        </Patrimony>
                        <List>
                            <Carrossel news={results2} />
                            
                            <New>
                                {results2.map((result,index) => (
                                    index <= 6 && result.urlToImage != null && isSafeHttpUrl(result.url)?
                                    <Card key={result.url || index}>
                                        <Content href={result.url} target="_blank" rel="noreferrer">
                                            <img src={`${result.urlToImage}`}/>
                                            <Title>{result.title}</Title>
                                        </Content>
                                    </Card> : null
                                ))}
                            </New>
                        </List>

                    </ContainerCarteira>

                </Body>
            ) : (
                <>
                    <Welcome results={results} user={user} page={"home"} />
                </>
            )
    )
}
