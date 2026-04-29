import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { Container, Card } from './styles';

const fallbackNews = [
  {
    url: "https://investnews.com.br/financas/yduqs-salta-mais-de-100-no-ano-e-lidera-altas-do-ibovespa-em-2023/",
    image: "https://investnews.com.br/wp-content/uploads/2022/03/logo-da-yduqs-divulgacao.jpeg",
    title: "Yduqs salta mais de 100% no ano e lidera altas do Ibovespa em 2023",
  },
  {
    url: "https://investnews.com.br/colunistas/sos-financas/o-que-acontece-se-um-fundo-de-investimento-quebrar/",
    image: "https://b1957982.smushcdn.com/1957982/wp-content/uploads/2022/11/Bolsa_caindo_04-590x354.jpg?lossy=1&strip=1&webp=1",
    title: "O que acontece se um fundo de investimento quebrar?",
  },
  {
    url: "https://investnews.com.br/criptonews/10-previsoes-para-o-mercado-de-criptomoedas-em-2024/",
    image: "https://b1957982.smushcdn.com/1957982/wp-content/uploads/2022/07/bitcoin-400x240.jpg?lossy=1&strip=1&webp=1",
    title: "10 previsões para o mercado de criptomoedas em 2024",
  },
];

export default function Carrossel({ news = [] }) {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 8000,
    cssEase: "linear"
  };

  const carouselNews = Array.isArray(news) && news.length > 0
    ? news
        .filter((item) => item?.url && item?.urlToImage && item?.title)
        .slice(0, 5)
        .map((item) => ({
          url: item.url,
          image: item.urlToImage,
          title: item.title,
        }))
    : fallbackNews;

  return (
    <Container>
      <Slider {...settings}>
        {carouselNews.map((item) => (
          <Card key={item.url}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <img src={item.image} />
              <h2>{item.title}</h2>
            </a>
          </Card>
        ))}
      </Slider>
    </Container>
  );
}