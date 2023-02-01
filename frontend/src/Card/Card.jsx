import React from "react";
import images from "../utils/images";
import "./index.css";

const Card = ({ numero, naipe }) => {
  return (
    <div className="card-container">
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
    </div>
  );
};

export default Card;
