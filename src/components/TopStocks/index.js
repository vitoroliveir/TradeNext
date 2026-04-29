import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { Container , Card } from './styles';

export default function TopStocks(/**{stocks}**/) {
  const [slidesToShow, setSlidesToShow] = useState(1);

  //Dados Mock enquanto não encontro uma api nova
  const stocks = [
    {
      "symbol": "PETR4",
      "regularMarketPrice": 35.67,
      "regularMarketChangePercent":-0.66834
    },{
      "symbol": "MGLU3",
      "regularMarketPrice": 2.17,
      "regularMarketChangePercent": 7.425747
    },
    {
      "symbol": "VALE3",
      "regularMarketPrice": 75.22,
      "regularMarketChangePercent":1.8551154
    },
    {
      "symbol": "ITUB4",
      "regularMarketPrice": 31.5,
      "regularMarketChangePercent":-0.2372127
    },
    {
      "symbol": "B3SA3",
      "regularMarketPrice": 13.53,
      "regularMarketChangePercent":1.7293198
    },
    {
      "symbol": "SUZB3",
      "regularMarketPrice": 51.76,
      "regularMarketChangePercent":-3.7560441
    },
    {
      "symbol": "BBDC4",
      "regularMarketPrice": 16.32,
      "regularMarketChangePercent":0.30730936
    },
    {
      "symbol": "ABEV3",
      "regularMarketPrice": 14.08,
      "regularMarketChangePercent":2.8487973
    },
    {
      "symbol": "LREN3",
      "regularMarketPrice": 16.38,
      "regularMarketChangePercent":0.0610771
    },
    {
      "symbol": "BBAS3",
      "regularMarketPrice": 54.38,
      "regularMarketChangePercent":0.20269138
    },
    {
      "symbol": "RENT3",
      "regularMarketPrice": 60.74,
      "regularMarketChangePercent":1.1658907
    },
    {
      "symbol": "HAPV3",
      "regularMarketPrice": 4.42,
      "regularMarketChangePercent":1.1441692
    },
    {
      "symbol": "KLBN11",
      "regularMarketPrice": 21.16,
      "regularMarketChangePercent":-6.24723
    },
    {
      "symbol": "PRIO3",
      "regularMarketPrice": 44.57,
      "regularMarketChangePercent":-2.9610288
    },
    {
      "symbol": "ELET3",
      "regularMarketPrice":  41.11,
      "regularMarketChangePercent":0.6118453
    },
  
  
    
  ]

  useEffect(() => {
    const getSlidesByWidth = (width) => {
      if (width <= 413) return 1;
      if (width <= 720) return 2;
      if (width <= 897) return 3;
      if (width <= 1091) return 4;
      if (width <= 1309) return 5;
      if (width <= 1500) return 6;
      if (width <= 1680) return 7;
      return 8;
    };

    const handleResize = () => {
      setSlidesToShow(getSlidesByWidth(window.innerWidth));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const formatPercente = (value) =>{
    if(value > 0){
      return <span style={{color:"#1eb980"}}>+{value}</span>
    }else{
      return <span style={{color:"#ff5252"}}>{value}</span>
    }
  }

  const formatCurrency = (value) => {
    return Number(value || 0).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });
  }


 
  return (
    <Container>
      <Slider {...settings}>
        {
          stocks.map((result)=>(
            <Card  key={result.symbol}>
              <div>
                <h2>{result.symbol}</h2>
                <h3>{formatCurrency(result.regularMarketPrice)}</h3>
                {formatPercente(result.regularMarketChangePercent.toFixed(2))} 
              </div>
            </Card>
          ))
        }
      </Slider>
    </Container>
  );
}


