import React, { useState } from 'react';
import Head from 'next/head';
import AddAcoes from '../AddAcoes';
import B3 from '../B3';
import Image from 'next/image'
import Sidebar from '../Sidebar';
import {
    Modal,
    Welcome2,
    Add,
    Logo,
    Container,
    IconIoMdAdd,
    IconTbPlugConnected,
    Body
} from './styles';

export default function Welcome({ results, user, page }) {
    const [activeModal, setActiveModal] = useState(false)
    const [activeModalB3, setActiveModalB3] = useState(false)


    return (
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
                <Welcome2>
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
                </Welcome2>

                <Add>
                    <h1>Como você quer começar?</h1>

                    <Modal onClick={() => activeModal ? setActiveModal(false) : setActiveModal(true)} ><IconIoMdAdd />Adicionando um investimento</Modal>

                    <Modal onClick={() => activeModalB3 ? setActiveModalB3(false) : setActiveModalB3(true)} ><IconTbPlugConnected />Conecte-se a b3</Modal>

                </Add>
            </Container>
            {activeModal ? <AddAcoes results={results} onClose={() => { setActiveModal(false) }} page={page} /> : null}
            {activeModalB3 ? <B3 results={results} onClose={() => { setActiveModalB3(false) }} page={page} /> : null}

        </Body>
    );
}