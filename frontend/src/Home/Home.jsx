import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import { startGame, getCard, getHint } from "../services/blackjack.services";
import Card from "../Card/Card";
import images from "../utils/images";
import "./index.css";

const HomePage = () => {
  const [user, setUser] = useState({
    cards: [],
    sum_player: 0,
  });
  const [dealer, setDealer] = useState({
    cards: [],
    sum_dealer: 0,
  });
  const [hint, setHint] = useState([]);

  const handleHit = async () => {
    const res_hit = (await getCard(user.sum_player)).data;
    const temp = user.cards;
    const aux_card = {
      numero: res_hit.card,
      naipe: res_hit.naipe,
    };
    temp.push(aux_card);
    setUser({
      cards: temp,
      sum_player: res_hit.sum_player,
    });
    const res_hint = (await getHint(user.sum_player)).data;
    setHint(res_hint);
  };

  const handleStand = () => {
    console.log("STAND BUTTON");
  };

  const handleStart = async () => {
    const start_res = (await startGame()).data;
    console.log("start_res", start_res)
    const [userCardsTemp, dealerCardsTemp] = handleInitialData(start_res);
    setUser({ cards: userCardsTemp, sum_player: start_res.sum_player });
    setDealer({ cards: dealerCardsTemp, sum_player: start_res.sum_player });

  };

  const handleInitialData = (data) => {
    const userCardsTemp = [];
    const dealerCardsTemp = [];
    for (let index = 0; index < data.player.length; index++) {
      let tempUser = {};
      let tempDealer = {};
      tempUser.numero = data.player[index];
      tempUser.naipe = data.player_naipes[index];
      userCardsTemp.push(tempUser);
      tempDealer.numero = data.dealer[index];
      tempDealer.naipe = data.dealer_naipes[index];
      dealerCardsTemp.push(tempDealer);
    }
    return [userCardsTemp, dealerCardsTemp];
  };

  const handleReset = async () => {
    setUser({
      cards: [],
      sum_player: 0,
    });
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="row text-center">
          <div className="col-12 header-tittle">
            Black Jack{" "}
            <img
              src={images.backJackTittle}
              width={60}
              alt="Black Jack image"
            />
          </div>
          <div className="col-3">
            <button className="header-button" onClick={(e) => handleHit(e)}>
              Hit
            </button>
          </div>
          <div className="col-3">
            <button className="header-button" onClick={(e) => handleStand(e)}>
              Stand
            </button>
          </div>
          <div className="col-3">
            <button className="header-button" onClick={(e) => handleStart(e)}>
              Start
            </button>
          </div>
          <div className="col-3">
            <button className="header-button" onClick={(e) => handleReset(e)}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="home-main">
        <div className="message-container centraliza">
          {user &&
            user.cards.length > 0 &&
            user.sum_player <= 21 &&
            `Você está com ${user.sum_player} pontos!`}
          {user &&
            user.cards.length > 0 &&
            user.sum_player > 21 &&
            `Você perdeu!!`}
          {user && user.cards.length === 0 && "Inicie o jogo!"}
        </div>
        <div className="centraliza">
          {user &&
            user.cards.map((card, index) => (
              <Card key={index} numero={card.numero} naipe={card.naipe} />
            ))}
        </div>
      </div>
      {user && user.cards.length > 0 && (
        <div className="home-footer centraliza">
          <img src={images.dica} alt="Dica da rodada" width={100} />
          <p>
            <Alert variant={"primary"}>
              Dica da rodada dessas cartas para ganhar:
            </Alert>
          </p>
        </div>
      )}
      {console.log("DEALER", dealer)}
      {console.log("USER", user)}

    </div>
  );
};

export default HomePage;
