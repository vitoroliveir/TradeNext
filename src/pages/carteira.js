import Head from 'next/head';
import { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar"
import { listDb, readDb} from '../services/db';
import Welcome from '../components/Welcome'


import {
    Body,
    Patrimony,
    List,
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
export default function Carteira({results}){ 
        const [user, setUser] = useState()
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
            })

            await readDb(localStorage.getItem('uid'), "total", "RESULTTOTAL").then((response)=>{
                if(response.totalCost != undefined){
                    setCost(response.totalCost.toFixed(2))
                    setResult(response.totalReturn.toFixed(2))
                    setPorcento(response.percentage.toFixed(2))
                    setRetorno((response.percentage.toFixed(2) * response.totalCost.toFixed(2) / 1000).toFixed(3))
                }
            })

        }
    
        useEffect(() => {
            setUser(localStorage.getItem('uid'))
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
                                    <Donut />
                                </Graphic>
                            </Total>
                            <p>Custo   <Valor>{formatCurrency(cost)}</Valor></p>
                            <p>Retorno <Valor>{formatCurrency(retorno)}</Valor> <Valor>({porcento}%)</Valor></p>
                        </Patrimony>
                        <List>                      

                            
                        </List>
                    </ContainerCarteira>
                </Body>
            ) : (
                <>
                    <Welcome results={results} user={user} page={"carteira"}/>
                </>
            )
    )
}