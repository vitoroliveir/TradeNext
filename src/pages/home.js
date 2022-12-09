import Head from 'next/head';
import { useEffect, useState } from 'react';
import AddAcoes from '../components/AddAcoes';
import B3 from '../components/B3';
import Sidebar from "../components/Sidebar"
import { listDb, readDb} from '../services/db';
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react";
import Image from 'next/image'


import {
    Body,
    Modal,
    Welcome,
    Add,
    Logo,
    Container,
    IconIoMdAdd,
    Patrimony,
    List,
    IconTbPlugConnected,
    ContainerCarteira,
    IconFaCoins,
    Total,
    Graphic,
    Valor,
    New,Card,Title,Content,
} from "../styles/home"
import Donut from '../components/Graphics/Donut';



export async function getStaticProps() {
    const url = `https://brapi.dev/api/available`;
    const data = await fetch(url)
    const datas = await data.json()
    const results = await datas.stocks

    const url2 = `https://newsapi.org/v2/everything?q=economy&from=12/02/2022&sortBy=popularity&pageSize=26&language=pt&apiKey=a242db57c2014e789589154d5e3bd158`;
    
    const data2 = await fetch(url2)

    const datas2 = await data2.json()

    const results2 = await datas2.articles


    return {
        props: { results , results2 },
        revalidate: 6000,
    }
}


export default function Home({results, results2}) {
    const { user } = useContext(AuthContext);
    const [activeModal, setActiveModal] = useState(false)
    const [activeModalB3, setActiveModalB3] = useState(false)
    const [data, setData] = useState([])
    const [cost, setCost] = useState()
    const [result, setResult] = useState()
    const [porcento, setPorcento] = useState()
    const [retorno, setRetorno] = useState()

    const formatCurrency = (value)=> {
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g , "");

        value = Number(value) / 100;

        value = value.toLocaleString("pt-br",{
            style:"currency",
            currency:"BRL"
        });

        return signal + value;
    }

    const list = async ()  => {
        await listDb(localStorage.getItem('uid')).then((response) => {
            setData(response)
            console.log(response)
        })

        await readDb(localStorage.getItem('uid'), "total", "RESULTTOTAL").then((response)=>{
            setCost(response.totalCost.toFixed(2))
            setResult(response.totalReturn.toFixed(2))
            setPorcento(response.percentage.toFixed(2))
            setRetorno((response.percentage.toFixed(2) * response.totalCost.toFixed(2) / 1000).toFixed(3))
        })

    }

    useEffect(() => {
        list()
    }, [])

    return (

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
                <ContainerCarteira>
                    <Patrimony>
                        <Total>
                            <h1><IconFaCoins/> Patrimônio</h1>
                            <p>{formatCurrency(result)}</p>
                            <Graphic>
                                <Donut />
                            </Graphic>
                        </Total>
                        <p>Custo   <Valor>{formatCurrency(cost)}</Valor></p>
                        <p>Retorno <Valor>{formatCurrency(retorno)}</Valor> <Valor>({porcento}%)</Valor></p>
                    </Patrimony>
                    <List>
                            
                        <h1>Principais Assuntos</h1>
                        <New>
                            {results2.map((result) => (
                                <Card key={result.id}><Content href={result.url}><Title>{result.title}</Title></Content></Card>
                            ))}
                        </New>
                            
                        
                    </List>
                </ContainerCarteira>
            </Body>
        ) : (
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
                <Container>
                    <Welcome>
                        <Logo>
                            <Image
                                src="/images/logo.svg"
                                alt="logo"
                                width="36"
                                height="36"
                            />
                        </Logo>
                        <h1>Ola, {user?.name}!</h1>
                        <p>Abandone já as planilhas e controle seus investimentos num único lugar com o TradeNext!</p>
                    </Welcome>

                    <Add>
                        <h1>Como você quer começar?</h1>
                        
                        <Modal onClick={() => activeModal ? setActiveModal(false) : setActiveModal(true)}><IconIoMdAdd/>Adicionando um investimento</Modal>
                        
                        <Modal onClick={() => activeModalB3 ? setActiveModalB3(false) : setActiveModalB3(true)}><IconTbPlugConnected/>Conecte-se a b3</Modal>

                    </Add>
                </Container>
                {activeModal ? <AddAcoes results={results} onClose={() => { setActiveModal(false) }} /> : null}
                {activeModalB3 ? <B3 results={results} onClose={() => { setActiveModalB3(false) }} /> : null}

            </Body>
        )
    )
}