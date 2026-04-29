import Head from 'next/head';
import { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar";
import { listDb, readDb, resetDb } from '../services/db';
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
    const [cost, setCost] = useState();
    const [result, setResult] = useState();
    const [porcento, setPorcento] = useState();
    const [retorno, setRetorno] = useState();
    const [activeModal, setActiveModal] = useState(false);
    const [activeModalEdit, setActiveModalEdit] = useState(false);
    const [dataAtivo, setDataAtivo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await resetDb(localStorage.getItem('uid'));
            await listDb(localStorage.getItem('uid'), "analytics").then((response) => {
                setData(response);
                setLoading(false);
            });
            await readDb(localStorage.getItem('uid'), "total", "RESULTTOTAL").then((response) => {
                if (response.totalCost) {
                    setCost(response.totalCost.toFixed(2));
                    setResult(response.totalReturn.toFixed(2));
                    setPorcento(response.percentage.toFixed(1));
                    setRetorno(((response.percentage * response.totalCost) / 1000).toFixed(3));
                }
            });
            setUser(localStorage.getItem('uid'));
        };
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
        const signal = Number(value) < 0 ? "-" : "";
        return signal + (Number(value) / 100).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        });
    };

    const calculationPercentage = (n1, n2) => (((n1 - n2) / n2) * 100).toFixed(0);

    const handleToggleModal = () => setActiveModal(!activeModal);
    const handleToggleModalEdit = () => setActiveModalEdit(!activeModalEdit);

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
                                <p>{formatCurrency(result)}</p>
                                <Graphic>
                                    <Donut />
                                </Graphic>
                            </Total>
                            <p>Custo <Valor>{formatCurrency(cost)}</Valor></p>
                            <p>Retorno <Valor>{formatCurrency(retorno)}</Valor> <Valor>({porcento}%)</Valor></p>
                        </Patrimony>
                        <List>
                            <h1>Meus Ativos</h1>
                            <Header>
                                {["", "Qtde", "P.Médio", "Preço", "Retorno", "%Carteira"].map((text, index) => (
                                    <TextLimiter key={index} text={text} qtd={4} />
                                ))}
                            </Header>
                            <Scroll>
                                {data.map((result) => (
                                    <ModalEdit key={result.name} onClick={() => handleOpenModalEdit(result.name)}>
                                        <Item>
                                            <TextLimiter text={result.name} qtd={4} />
                                            <span>{result.qtd}</span>
                                            <span>{result.valueBuy}</span>
                                            <span>{result.currentValue}</span>
                                            <span>{calculationPercentage(result.return, result.cost)}%</span>
                                            <span>{((result.return * 100) / result).toFixed(1)}%</span>
                                        </Item>
                                    </ModalEdit>
                                ))}
                            </Scroll>
                            <Modal onClick={handleToggleModal}>Adicionar um investimento</Modal>
                        </List>
                    </ContainerCarteira>
                    {activeModal && (
                        <AddAcoes results={results} onClose={() => { handleToggleModal(); setLoading(true); }} page="carteira" type="CADASTRAR" />
                    )}
                    {activeModalEdit && (
                        <AddAcoes results={results} onClose={() => { handleToggleModalEdit(); setLoading(true); }} page="carteira" type="EDITAR" ativos={dataAtivo} />
                    )}
                </Body>
            ) : (
                <Welcome results={results} user={user} page="carteira" />
            )
        )
    );
}
