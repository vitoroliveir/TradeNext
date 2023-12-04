import Head from 'next/head';
import { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar"
import { listDb, readDb, resetDb } from '../services/db';
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



export async function getStaticProps() {
    const url = `https://brapi.dev/api/available`;
    const data = await fetch(url)
    const datas = await data.json()
    const results = await datas.stocks

    // const urlS = `https://brapi.dev/api/quote/PETR4%2CMGLU3%2CVALE3%2CITUB4%2CB3SA3%2CSUZB3%2CBBDC4%2CABEV3%2CLREN3%2CBBAS3%2CRENT3%2CHAPV3%2CKLBN11%2CPRIO3%2CELET3?token=x6Cr3XN4ZDKxycrrRbx7kM&range=1d&interval=1d&fundamental=true`;
    // const dataS = await fetch(urlS)
    // const datasS = await dataS.json()
    // const resultsStocks = await datasS.results

    const url2 = `https://newsapi.org/v2/everything?q=economy&from=30/12/2022&sortBy=popularity&pageSize=26&language=pt&apiKey=a242db57c2014e789589154d5e3bd158`;
    const data2 = await fetch(url2)
    const datas2 = await data2.json()
    const results2 = await datas2.articles


    return {
        props: { results, results2, /**resultsStocks**/ },
        revalidate: 6000,
    }
}


export default function Home({ results, results2, /**resultsStocks**/ }) {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([])
    const [cost, setCost] = useState()
    const [result, setResult] = useState()
    const [porcento, setPorcento] = useState()
    const [retorno, setRetorno] = useState()
    const [loading, setLoading] = useState(true)

    const formatCurrency = (value) => {
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g, "");

        value = Number(value) / 100;

        value = value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        });

        return signal + value;
    }


    const list = async () => {
        await resetDb(localStorage.getItem('uid'))

        await listDb(localStorage.getItem('uid'), "acoes").then((response) => {
            setData(response)
            setLoading(false)
        })

        await readDb(localStorage.getItem('uid'), "total", "RESULTTOTAL").then((response) => {
            if (response.totalCost != undefined) {
                setCost(response.totalCost.toFixed(2))
                setResult(response.totalReturn.toFixed(2))
                setPorcento(response.percentage.toFixed(2))
                setRetorno((response.percentage.toFixed(2) * response.totalCost.toFixed(2) / 1000).toFixed(3))
            }
        })

    }

    useEffect(() => {
        list()
    }, [])

    return (
        loading ? (
            <><Loading /></>
        ) :
            data != "" ? (
                <Body>
                    <Head>
                        <script
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                                __html: `
                        if (!document.cookie || !document.cookie.includes('tradeNext-auth')) {
                            window.location.href = "/"
                        }
                        `,
                            }}
                        />
                    </Head>
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
                            <p>Retorno <Valor>{formatCurrency(retorno)}</Valor> <Valor>({porcento}%)</Valor></p>
                        </Patrimony>
                        <List>
                            <Carrossel news={results2} />
                            
                            <New>
                                {results2.map((result,index) => (
                                    index <= 5 ?
                                    <Card key={result.id}>
                                        <Content href={result.url}>
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