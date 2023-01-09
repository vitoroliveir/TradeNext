import Head from 'next/head';
import { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar"
import { listDb, resetDb} from '../services/db';
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react";
import Welcome from '../components/Welcome'

import {
    Body,
    GraphicSplineArea,
    GraphicBaiscLine

} from "../styles/dashboard"
import Loading from '../components/Loading';
import BasicLine from '../components/Graphics/BasicLine';
import SplineArea from '../components/Graphics/SplineArea';



export default function Dashboard({results}) {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([])
    const [loading , setLoading] = useState(true)

    const list = async ()  => {
        await resetDb(localStorage.getItem('uid'))

        await listDb(localStorage.getItem('uid'), "analytics").then((response) => {
            setData(response)
            setLoading(false)
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
                <Sidebar Page={'Dashboard'} />
                
                <GraphicBaiscLine>
                    <BasicLine/>
                </GraphicBaiscLine>
                
                <GraphicSplineArea>
                    <SplineArea/>
                </GraphicSplineArea>
                
            </Body>
        ) : (
            <>
            
                <Welcome results={results} user={user} page={"dashboard"} />
            </>
        )
    )
}