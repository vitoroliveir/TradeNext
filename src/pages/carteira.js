import Head from 'next/head';
import { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar";
import { listDb, readDb } from '../services/db';
import Welcome from '../components/Welcome';
import AddAcoes from '../components/AddAcoes';
import Donut from '../components/Graphics/Donut';
import Loading from '../components/Loading';
import TextLimiter from '../components/TextLimiter';
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
} from "../styles/carteira";

export async function getStaticProps() {
    const url = `https://brapi.dev/api/available`;
    const res = await fetch(url);
    const data = await res.json();
    const results = data.stocks;

    return {
        props: { results },
        revalidate: 6000,
    };
}

export default function Carteira({ results }) {
    const [user, setUser] = useState();
    const [data, setData] = useState([]);
    const [cost, setCost] = useState(0);
    const [patrimony, setPatrimony] = useState(0);
    const [porcento, setPorcento] = useState(0);
    const [retorno, setRetorno] = useState(0);
    const [activeModal, setActiveModal] = useState(false);
    const [activeModalEdit, setActiveModalEdit] = useState(false);
    const [dataAtivo, setDataAtivo] = useState({});
    const [loading, setLoading] = useState(true);
    const [donutRefreshKey, setDonutRefreshKey] = useState(0);

    const fetchData = async () => {
        const uid = localStorage.getItem('uid');
        if (!uid) {
            setLoading(false);
            return;
        }

        try {
            const [analytics, totals] = await Promise.all([
                listDb(uid, "analytics"),
                readDb(uid, "total", "RESULTTOTAL"),
            ]);

            setData(Array.isArray(analytics) ? analytics : []);

            if (totals?.totalCost !== undefined) {
                const totalCost = Number(totals.totalCost || 0);
                const totalReturn = Number(totals.totalReturn || 0);
                const percentage = Number(totals.percentage || 0);

                setCost(totalCost);
                setPatrimony(totalReturn);
                setPorcento(percentage);
                setRetorno(totalReturn - totalCost);
            } else {
                setCost(0);
                setPatrimony(0);
                setPorcento(0);
                setRetorno(0);
            }

            setUser(uid);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleOpenModalEdit = async (ativos) => {
        await readDb(localStorage.getItem('uid'), "acoes", ativos).then((response) => {
            setDataAtivo({
                name: response.name,
                value: response.value,
                corretora: response.corretora,
                date: response.date,
                qtd: response.qtd
            });
            setActiveModalEdit(true);
        });
    };

    const formatCurrency = (value) => {
        return Number(value || 0).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        });
    };

    const calculationPercentage = (n1, n2) => {
        const costValue = Number(n2 || 0);
        if (costValue <= 0) return "0.0";
        return (((Number(n1 || 0) - costValue) / costValue) * 100).toFixed(1);
    };

    const calculationWalletPercentage = (assetReturn, totalReturn) => {
        const total = Number(totalReturn || 0);
        if (total <= 0) return "0.0";
        return ((Number(assetReturn || 0) * 100) / total).toFixed(1);
    };

    const handleToggleModal = () => setActiveModal(!activeModal);
    const handleToggleModalEdit = () => setActiveModalEdit(!activeModalEdit);
    const handleSaved = async () => {
        setLoading(true);
        await fetchData();
        setDonutRefreshKey((current) => current + 1);
    };

    return (
        loading ? (
            <Loading />
        ) : (
            data.length > 0 ? (
                <Body>
                    <Head>
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                                if (!document.cookie || !document.cookie.includes('tradeNext-auth')) {
                                    window.location.href = "/";
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
                                <p>{formatCurrency(patrimony)}</p>
                                <Graphic>
                                    <Donut refreshKey={donutRefreshKey} />
                                </Graphic>
                            </Total>
                            <p>Custo <Valor>{formatCurrency(cost)}</Valor></p>
                            <p>Retorno <Valor>{formatCurrency(retorno)}</Valor> <Valor>({Number(porcento || 0).toFixed(2)}%)</Valor></p>
                        </Patrimony>
                        <List>
                            <h1>Meus Ativos</h1>
                            <Header>
                                {["", "Qtde", "P.Médio", "Preço", "Retorno", "%Carteira"].map((text, index) => (
                                    <TextLimiter key={index} text={text} qtd={4} />
                                ))}
                            </Header>
                            <Scroll>
                                {data.map((asset) => (
                                    <ModalEdit key={asset.name} onClick={() => handleOpenModalEdit(asset.name)}>
                                        <Item>
                                            <TextLimiter text={asset.name} qtd={4} />
                                            <span>{asset.qtd}</span>
                                            <span>{asset.valueBuy}</span>
                                            <span>{asset.currentValue}</span>
                                            <span>{calculationPercentage(asset.return, asset.cost)}%</span>
                                            <span>{calculationWalletPercentage(asset.return, patrimony)}%</span>
                                        </Item>
                                    </ModalEdit>
                                ))}
                            </Scroll>
                            <Modal onClick={handleToggleModal}>Adicionar um investimento</Modal>
                        </List>
                    </ContainerCarteira>
                    {activeModal && (
                        <AddAcoes
                            results={results}
                            onClose={handleToggleModal}
                            onSuccess={handleSaved}
                            page="carteira"
                            type="CADASTRAR"
                        />
                    )}
                    {activeModalEdit && (
                        <AddAcoes
                            results={results}
                            onClose={handleToggleModalEdit}
                            onSuccess={handleSaved}
                            page="carteira"
                            type="EDITAR"
                            ativos={dataAtivo}
                        />
                    )}
                </Body>
            ) : (
                <Welcome results={results} user={user} page="carteira" />
            )
        )
    );
}
