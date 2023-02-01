import React from "react";
import Alert from "react-bootstrap/Alert";
import Card from "../Card/Card";
import images from "../utils/images";
import "./index.css";

const cards = [
  {
    numero: 10,
    naipe: 0,
  },
  {
    numero: 9,
    naipe: 1,
  },
  {
    numero: 2,
    naipe: 0,
  },
  {
    numero: 7,
    naipe: 2,
  },
  {
    numero: 10,
    naipe: 3,
  },
];

const HomePage = () => {
  
    const handleHit = () => {
        console.log("HIT BUTTON")
    }

    const handleStand = () => {
        console.log("STAND BUTTON")
    }

    const handleReset = () => {
        console.log("RESET BUTTON")
    }
    
    return (
    <div className="home-container">
      <div className="home-header">
        <div className="row text-center">
          <div className="col-12 header-tittle">
            Black Jack <img src={images.backJackTittle} width={60} alt="Black Jack image" />
          </div>
          <div className="col-4">
            <button className="header-button" onClick={(e) => handleHit(e)}>Hit</button>
          </div>
          <div className="col-4">
            <button className="header-button" onClick={(e) => handleStand(e)}>Stand</button>
          </div>
          <div className="col-4">
            <button className="header-button" onClick={(e) => handleReset(e)}>Reset</button>
          </div>
        </div>
      </div>
      <div className="home-main centraliza">
        {cards.map((card, index) => (
          <Card key={index} numero={card.numero} naipe={card.naipe} />
        ))}
      </div>
      <div className="home-footer centraliza">
        <img src={images.dica} alt="Dica da rodada" width={100} />
        <p>
          <Alert variant={"primary"}>
            Dica DIJKSTRA da rodada: Você precisa de um 10 para vencer!!
          </Alert>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
