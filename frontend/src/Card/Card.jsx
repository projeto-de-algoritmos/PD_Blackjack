import React from "react";
import images from "../utils/images";
import "./index.css";

const Card = ({ numero, naipe }) => {
  return (
    <div className="card-container">
      {numero > 1 && numero <= 10 && (
        <>
          <div className="card-header">
            <p>{numero}</p>
          </div>
          <div className="card-main">
            <img
              src={
                naipe === 0
                  ? images.paus
                  : naipe === 1
                  ? images.copas
                  : naipe === 2
                  ? images.espadas
                  : images.ouro
              }
              alt="Simbolo Black Jack"
              width={50}
            />
          </div>
        </>
      )}
      {console.log("NUMEROOOO", numero)}
      {(numero == 1 || numero > 10) && (
        <>
          <div className="card-header">
            <p>{numero === 11 ? "K" : numero === 12 ? "Q" : "J"}</p>
          </div>
          <div className="card-main">
            <img
              src={
                numero === 1
                  ? images.espadas
                  : numero === 11
                  ? images.rei
                  : numero === 12
                  ? images.rainha
                  : images.valete
              }
              alt="Simbolo Black Jack"
              width={50}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
