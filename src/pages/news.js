import Sidebar from "../components/Sidebar"
import Head from 'next/head';
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

export async function getStaticProps() {
    let results = [];
    try {
        const url = `https://newsapi.org/v2/everything?q=economy&from=29/04/2026&sortBy=popularity&pageSize=26&language=pt&apiKey=a242db57c2014e789589154d5e3bd158`;
        const data = await fetch(url);
        const datas = await data.json();
        results = Array.isArray(datas?.articles) ? datas.articles : [];
    } catch (error) {
        results = [];
    }

    return {
        props: { results },
    }
}

export default function News({ results }) {
    const validNews = (results || []).filter((article) => (
        article?.title &&
        article.title !== "[Removed]" &&
        article?.url
    ));

    const featuredNews = validNews.slice(0, 4);
    const firstMain = featuredNews[1];
    const secondaryNews = featuredNews.slice(2);
    const listNews = validNews.slice(4);
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
                        {firstMain && (
                            <Main>
                                <CardMain>
                                    <Content href={firstMain.url} target="_blank" rel="noreferrer">
                                        {firstMain.urlToImage ? (
                                            <img src={firstMain.urlToImage} alt={firstMain.title} />
                                        ) : null}
                                        <Title>{firstMain.title}</Title>
                                    </Content>
                                </CardMain>
                            </Main>
                        )}

                        {secondaryNews.length > 0 && (
                            <SubNews>
                                {secondaryNews.map((article) => (
                                    <CardMain key={article.url}>
                                        <Content href={article.url} target="_blank" rel="noreferrer">
                                            {article.urlToImage ? (
                                                <img src={article.urlToImage} alt={article.title} />
                                            ) : null}
                                            <Title>{article.title}</Title>
                                        </Content>
                                    </CardMain>
                                ))}
                            </SubNews>
                        )}
                    </ListMain>
                </NewsMain>

                <New>
                    <h1>Principais Assuntos</h1>
                    <List>
                        {listNews.map((article) => (
                            article?.title
                                ? <Card key={article.url}><Content href={article.url} target="_blank" rel="noreferrer"><Title>{article.title}</Title></Content></Card>
                                : null
                        ))}
                    </List>
                </New>
            </Body>
        </>
    )
}
