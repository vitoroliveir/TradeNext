import Head from 'next/head';
import { useEffect, useState } from 'react';
import AddAcoes from '../components/AddAcoes';
import B3 from '../components/B3';
import Sidebar from "../components/Sidebar"
import { listDb} from '../services/db';
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
    IconTbPlugConnected
} from "../styles/dashboard"



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



export default function Dashboard({results}) {
    const { user } = useContext(AuthContext);
    const [activeModal, setActiveModal] = useState(false)
    const [activeModalB3, setActiveModalB3] = useState(false)
    const [data, setData] = useState([])

    const list = async ()  => {

        await listDb(localStorage.getItem('uid')).then((response) => {
            setData(response)
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
                <Sidebar Page={'Dashboard'} />

                
                <Modal onClick={() => activeModal ? setActiveModal(false) : setActiveModal(true)}><IconIoMdAdd/>Adicionando um investimento</Modal>
                {activeModal ? <AddAcoes results={results} onClose={() => { setActiveModal(false) }} /> : null}
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
                <Sidebar Page={'Dashboard'} />
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