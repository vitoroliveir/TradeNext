import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { Container, Card } from './styles';

export default function Carrossel() {
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

  return (
    <Container>
      <Slider {...settings}>
        <Card>
          <a href="https://investnews.com.br/financas/yduqs-salta-mais-de-100-no-ano-e-lidera-altas-do-ibovespa-em-2023/">
            <img src={"https://investnews.com.br/wp-content/uploads/2022/03/logo-da-yduqs-divulgacao.jpeg"} />
            <h2>Yduqs salta mais de 100% no ano e lidera altas do Ibovespa em 2023</h2>
          </a>
        </Card>

        <Card>
          <a href="https://investnews.com.br/colunistas/sos-financas/o-que-acontece-se-um-fundo-de-investimento-quebrar/">
            <img src={"https://b1957982.smushcdn.com/1957982/wp-content/uploads/2022/11/Bolsa_caindo_04-590x354.jpg?lossy=1&strip=1&webp=1"} />
            <h2>O que acontece se um fundo de investimento quebrar?</h2>
          </a>
        </Card>

        <Card>
          <a href="https://investnews.com.br/criptonews/10-previsoes-para-o-mercado-de-criptomoedas-em-2024/">
            <img src={"https://b1957982.smushcdn.com/1957982/wp-content/uploads/2022/07/bitcoin-400x240.jpg?lossy=1&strip=1&webp=1"} />
            <h2>10 previsões para o mercado de criptomoedas em 2024</h2>
          </a>
        </Card>
      </Slider>
    </Container>
  );
}