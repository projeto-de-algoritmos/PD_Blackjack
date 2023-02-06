import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import {
  startGame,
  getUserCard,
  getDealerCard,
  getHint,
} from "../services/blackjack.services";
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
  const [message, setMessasge] = useState("Inicie e Jogo!");
  const [hint, setHint] = useState([]);
  const [result, setResult] = useState(false);

  const handleHit = async () => {
    const res_hit = (await getUserCard(user.sum_player)).data;
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
    if (res_hit.sum_player > 21) setMessasge("Você perdeu!!");
    else setMessasge(`Você possui ${res_hit.sum_player} pontos!`);
    const res_hint = (await getHint(res_hit.sum_player)).data;
    setHint(res_hint.hint);
    await handleDealerCard();
  };

  const handleDealerCard = async () => {
    const res_dealer = (await getDealerCard(dealer.sum_dealer)).data;
    console.log("res realer", res_dealer);
    const temp = dealer.cards;
    const aux_card = {
      numero: res_dealer.card,
      naipe: res_dealer.naipe,
    };
    temp.push(aux_card);
    setDealer({
      cards: temp,
      sum_dealer: res_dealer.sum_dealer,
    });
  };

  const handleStand = () => {
    setResult(true);
    if (user.sum_player <= 21 && dealer.sum_dealer <= 21) {
      if (user.sum_player > dealer.sum_dealer) setMessasge("Você ganhou!!");
      else if (user.sum_player === dealer.sum_dealer)
        setMessasge("Partida empatada!!");
      else setMessasge("Você perdeu!!");
    } else {
      if (user.sum_player <= 21) setMessasge("Você ganhou!!");
      if (dealer.sum_dealer <= 21) setMessasge("Você perdeu!!");
    }
  };

  const handleStart = async () => {
    const start_res = (await startGame()).data;
    const [userCardsTemp, dealerCardsTemp] = handleInitialData(start_res);
    setUser({ cards: userCardsTemp, sum_player: start_res.sum_player });
    setDealer({ cards: dealerCardsTemp, sum_dealer: start_res.sum_dealer });
    if (start_res.sum_player > 21) setMessasge("Você perdeu!!");
    else setMessasge(`Você possui ${start_res.sum_player} pontos!`);
    setHint(start_res.hint.hint);
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
    setDealer({
      cards: [],
      sum_dealer: 0,
    });
    setResult(false);
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
              Pegar carta
            </button>
          </div>
          <div className="col-3">
            <button className="header-button" onClick={(e) => handleStand(e)}>
              Parar
            </button>
          </div>
          <div className="col-3">
            <button className="header-button" onClick={(e) => handleStart(e)}>
              Iniciar
            </button>
          </div>
          <div className="col-3">
            <button className="header-button" onClick={(e) => handleReset(e)}>
              Resetar
            </button>
          </div>
        </div>
      </div>
      <div className="home-main">
        <div className="message-container centraliza">{message}</div>
        <div className="centraliza">
          {user &&
            user.cards.map((card, index) => (
              <Card key={index} numero={card.numero} naipe={card.naipe} />
            ))}
        </div>
        {result && (
          <div className=" mt-2">
            <div className="message-container text-center">
              Dealer possui {dealer.sum_dealer} pontos!
            </div>
            <div className="centraliza">
              {dealer &&
                dealer.cards.map((card, index) => (
                  <Card key={index} numero={card.numero} naipe={card.naipe} />
                ))}
            </div>
          </div>
        )}
      </div>
      {user && user.cards.length > 0 && (
        <div className="home-footer centraliza">
          <img src={images.dica} alt="Dica da rodada" width={100} />
          <span>
            <Alert variant={"primary"}>
              Dica da rodada: Você precisa de cartas de valores{" "}
              {hint.toString()} para ganhar!!
            </Alert>
          </span>
        </div>
      )}
    </div>
  );
};

export default HomePage;
