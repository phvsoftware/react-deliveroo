import React from "react";
import "./Payment.css";
import "./Basket.css";
import CB from "../images/mastercard.png";

const Payment = ({ price, closePopup, onClearAll }) => {
  return (
    <div className="popup">
      <div className="popup_inner">
        <div className="payment">
          <h1>Félicitation !</h1>
          <h2>Votre commande a bien été validée</h2>
          <h2>Le montant a été retiré de votre compte</h2>
          <img src={CB} alt="Carte Bancaire" />
          <h1>Montant de la transaction : {price} €</h1>
          <button
            className="button-validate"
            onClick={() => {
              closePopup();
              onClearAll();
            }}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
