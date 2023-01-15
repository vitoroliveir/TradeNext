import Sidebar from "../components/Sidebar"
import Head from 'next/head';
import Image from 'next/image'
import {
    Body,
    NewsMain,
    New,
    Card,
    CardMain,
    List,
    ListMain,
    Title,
    Main,
    SubNews,
    Content

} from "../styles/news"

/* const timeElapsed = Date.now();
const today = new Date(timeElapsed); */

export async function getStaticProps() {
    const url = `https://newsapi.org/v2/everything?q=economy&from=30/12/2022&sortBy=popularity&pageSize=26&language=pt&apiKey=a242db57c2014e789589154d5e3bd158`;
    
    const data = await fetch(url)

    const datas = await data.json()

    const results = await datas.articles


    return {
        props: { results },
    }
}

export default function News({ results }) {
    return (
        <>
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


            <Sidebar Page={'News'} />

            <Body>

                <NewsMain>
                    <h1>Principais Notícias</h1>

                    <ListMain>
                        <Main>
                            <CardMain>
                                <Content href={results[0].url}>
                                    <img src={`${results[0].urlToImage}`} />
                                    <Title>{results[0].title}</Title>
                                </Content>
                            </CardMain>
                        </Main>

                        <SubNews>
                            <CardMain>
                                <Content href={results[1].url}>
                                    <img src={`${results[1].urlToImage}`} />
                                    <Title>{results[1].title}</Title>
                                </Content>
                            </CardMain>

                            <CardMain>
                                <Content href={results[2].url}>
                                    <img src={`${results[2].urlToImage}`} />
                                    <Title>{results[2].title}</Title>
                                </Content>
                            </CardMain>
                        </SubNews>
                    </ListMain>

                </NewsMain>

                <New>
                <h1>Principais Assuntos</h1>
                    <List>
                        {results.map((result) => (
                            <Card key={result.id}><Content href={result.url}><Title>{result.title}</Title></Content></Card>
                        ))}
                    </List>

                </New>

            </Body>


        </>
    )
}