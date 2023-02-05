import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { Container , Card } from './styles';

export default function TopStocks({stocks}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [variableToModify, setVariableToModify] = useState('');

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
    if (windowWidth <= 720) {
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
            <Card>
              <h2>{result.symbol}</h2>
              <h3>{formatCurrency(result.regularMarketPrice)}</h3>
              {formatPercente(result.regularMarketChangePercent.toFixed(2))} 
            </Card>
          ))
        }
      </Slider>
    </Container>
  );
}