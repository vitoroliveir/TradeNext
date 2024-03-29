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
    Valor
} from "../styles/carteira"
import Donut from '../components/Graphics/Donut';


export async function getStaticProps() {
    const url = `https://brapi.dev/api/available`;
    const data = await fetch(url)
    const datas = await data.json()
    const results = await datas.stocks

    return {
        props: { results },
        revalidate: 6000,
    }
}

export default function Lamina({results}){ 
        const { user } = useContext(AuthContext);
        const [activeModal, setActiveModal] = useState(false)
        const [activeModalB3, setActiveModalB3] = useState(false)
        const [data, setData] = useState([])
        const [cost, setCost] = useState()
        const [result, setResult] = useState()
        const [porcento, setPorcento] = useState()

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
            await listDb(user.uid).then((response) => {
                setData(response)
                console.log(response)
            })

            await readDb(user.uid, "total", "RESULTTOTAL").then((response)=>{
                setCost(response.totalCost.toFixed(2))
                setResult(Number(response.totalReturn.toFixed(2))*100)
                setPorcento(response.percentage.toFixed(2))
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
                    <Sidebar Page={'Carteira'} />
                    <ContainerCarteira>
                        <Patrimony>
                            <Total>
                                <h1><IconFaCoins/> Patrimônio</h1>
                                <p>{formatCurrency(result)}</p>
                                <Graphic>
                                    <Donut uid={user.uid}/>
                                </Graphic>
                            </Total>
                            <p>Custo   <Valor>{formatCurrency(cost)}</Valor></p>
                            <p>Retorno <Valor>{formatCurrency(result)}</Valor> <Valor>({porcento}%)</Valor></p>
                        </Patrimony>
                        <List>{}</List>
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
                    <Sidebar Page={'Carteira'} />
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