import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { Container , Card } from './styles';

export default function TopStocks(/**{stocks}**/) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [variableToModify, setVariableToModify] = useState();

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
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if(windowWidth <= 413){
      setVariableToModify(1);
    }else if (windowWidth > 413 && windowWidth <= 720) {
      setVariableToModify(2);
    } else if (windowWidth > 720 && windowWidth <= 897 ) {
      setVariableToModify(3);
    } else if(windowWidth > 897 && windowWidth <= 1091) {
      setVariableToModify(4);
    }else if(windowWidth > 1091 && windowWidth <= 1309) {
      setVariableToModify(5);
    }else if(windowWidth > 1309 && windowWidth <= 1500 ) {
      setVariableToModify(6);
    }else if(windowWidth > 1500 && windowWidth <= 1680 ) {
      setVariableToModify(7);
    }if(windowWidth > 1680 ) {
      setVariableToModify(8);
    }
  }, [windowWidth]);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: variableToModify,
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
    const signal = Number(value) < 0 ? "-" : "";

    value = String(value).replace(/\D/g, "");

    value = Number(value) / 100;

    value = value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });

    return signal + value;
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


