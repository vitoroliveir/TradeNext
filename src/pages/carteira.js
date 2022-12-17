import Head from 'next/head';
import { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar"
import { listDb, readDb } from '../services/db';
import Welcome from '../components/Welcome'
import AddAcoes from '../components/AddAcoes';
import EditAcoes from '../components/EditAcoes';



import {
    Body,
    Patrimony,
    List,
    ContainerCarteira,
    IconFaCoins,
    Total,
    Graphic,
    Valor,
    Item,
    Header,
    Modal,
    Scroll,
    ModalEdit
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
export default function Carteira({ results }) {
    const [user, setUser] = useState()
    const [data, setData] = useState([])
    const [cost, setCost] = useState()
    const [result, setResult] = useState()
    const [porcento, setPorcento] = useState()
    const [retorno, setRetorno] = useState()
    const [activeModal, setActiveModal] = useState(false)
    const [activeModalEdit ,setActiveModalEdit ] = useState()
    const [dataAtivo , setDataAtivo] = useState()
    const [ativo , setAtivo] = useState();
    const [corretora , setCorretora] = useState();
    const [value , setValue] = useState();
    const [qtd , setQtd] = useState();
    const [date , setDate] = useState();

    var newData = {
        name : ativo,
        value: value,
        corretora: corretora ,
        date: date,
        qtd: qtd
    }

    const onAtivo = async (ativos)=>{
            await readDb(localStorage.getItem('uid'),"acoes",ativos).then((response)=>{
                setAtivo(response.name)
                setValue(response.value)
                setCorretora(response.corretora)
                setDate(response.date)
                setQtd(response.qtd)
                setDataAtivo(newData)
                setActiveModalEdit(true)
            })
       
    }

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

    const calculationPercentage = (n1, n2) => {
        var percentage
        if (n1 > n2) {
            return percentage = (((n1 - n2) / n2) * 100).toFixed(1)
        } else {
            return percentage = (((n2 - n1) / n1) * 100).toFixed(1)
        }


    }

    
    const calculationTotal = (n1, n2) => {
        return n1 * n2
    }

    const list = async () => {
        await listDb(localStorage.getItem('uid'), "analytics").then((response) => {
            setData(response)
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
                        <h1>Meus Ativos</h1>
                        <Header>
                            <span></span>
                            <span>Qtde</span>
                            <span>P.Médio</span>
                            <span>Preço</span>
                            <span>Retorno</span>
                            <span>%Carteira</span>
                        </Header>
                        <Scroll>
                            
                                {
                                    data.map((results) => (
                                        <ModalEdit onClick={() => activeModal ? setActiveModalEdit(false) : onAtivo(results.name)} kew={results.name}>
                                            <Item>
                                                <span>{results.name}</span>
                                                <span>{results.qtd} </span>
                                                <span>{results.valueBuy} </span>
                                                <span>{results.currentValue}</span>
                                                <span>{calculationPercentage(results.return, results.cost)} %</span>
                                                <span>{(((calculationTotal(results.return, results.cost) * result)/100)/100).toFixed(1)} %</span>
                                            </Item>
                                        </ModalEdit>
                                    ))
                                }

                            
                        </Scroll>
                        <Modal onClick={() => activeModal ? setActiveModal(false) : setActiveModal(true)} >Adicionando um investimento</Modal>
                        
                    </List>
                </ContainerCarteira>
                { activeModal ? <AddAcoes results={results}  onClose={() => { setActiveModal(false) }} page={"carteira"} type={"CADASTRAR"}/> : null}
                { activeModalEdit ? <AddAcoes results={results} onClose={() => { setActiveModalEdit(false) }} page={"carteira"} type={"EDITAR"} ativos={newData}/> : null}
            </Body>
        ) : (
            <>
                <Welcome results={results} user={user} page={"carteira"} />
            </>
        )
    )
}