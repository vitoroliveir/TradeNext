import { useCallback, useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar"
import { listDb } from '../services/db';
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react";
import Welcome from '../components/Welcome'

import {
    Body,
    GraphicSplineArea,
    GraphicBasicLine,
    DashboardContent,
    ChartGrid,
    DashboardHeader,
    EmptyMessage

} from "../styles/dashboard"
import Loading from '../components/Loading';
import BasicLine from '../components/Graphics/BasicLine';
import SplineArea from '../components/Graphics/SplineArea';



export default function Dashboard({ results }) {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const list = useCallback(async () => {
        const uid = user?.uid

        if (!uid) {
            setLoading(false)
            return
        }

        try {
            const response = await listDb(uid, "analytics")
            const analytics = Array.isArray(response) ? response : []
            setData(analytics)

        } catch (err) {
            setError("Nao foi possivel carregar os dados da dashboard.")
            setData([])
        } finally {
            setLoading(false)
        }
    }, [user?.uid])

    useEffect(() => {
        list()
    }, [list])

    const hasPortfolio = data.length > 0

    return (
        loading ? (
            <><Loading /></>
        ) :
            hasPortfolio ? (
                <Body>
                    <Sidebar Page={'Dashboard'} />

                    <DashboardContent>
                        <DashboardHeader>
                            <h1>Dashboard</h1>
                            <p>Acompanhe a evolucao da carteira e compare o desempenho com a Selic.</p>
                        </DashboardHeader>

                        {error ? <EmptyMessage>{error}</EmptyMessage> : null}

                        <ChartGrid>
                            <GraphicBasicLine>
                                <BasicLine />
                            </GraphicBasicLine>

                            <GraphicSplineArea>
                                <SplineArea />
                            </GraphicSplineArea>
                        </ChartGrid>
                    </DashboardContent>
                </Body>
            ) : (
                <Welcome results={results} user={user} page={"dashboard"} />
            )
    )
}
