import React, { useState } from "react";
import "./Basket.css";
import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";
import TrashIcon from "./TrashIcon";
import Payment from "./Payment";

const Basket = ({ cart, onChangeQuantity, subTotal, charges, total, onClearAll }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="basket">
      <div className="basket-container">
        <div className="button-container">
          <button
            className={cart.length > 0 ? "button-validate" : "button-validate-disabled"}
            onClick={() => {
              togglePopup();
            }}
          >
            Valider mon panier
          </button>
          {cart.length > 0 && (
            <button className="button-trash" onClick={onClearAll}>
              <TrashIcon />
            </button>
          )}
        </div>
        {cart.length > 0 && (
          <div>
            <div className="articles">
              {cart.map((item, index) => {
                return (
                  <div className="cart-line" key={index}>
                    <div
                      className="delimiter1"
                      onClick={() => {
                        onChangeQuantity(item, -1);
                      }}
                    >
                      <MinusIcon color="#00cdbd" />
                    </div>
                    <div className="delimiter2">{item.quantity}</div>
                    <div
                      className="delimiter1"
                      onClick={() => {
                        onChangeQuantity(item, 1);
                      }}
                    >
                      <PlusIcon color="#00cdbd" />
                    </div>
                    <div className="delimiter3">{item.name}</div>
                    <div className="delimiter4">{item.price} €</div>
                  </div>
                );
              })}
            </div>
            <div className="total1">
              <div className="cart-line2">
                <div className="delimiter5">Sous-total</div>
                <div className="delimiter6">{subTotal} €</div>
              </div>
              <div className="cart-line2">
                <div className="delimiter5">Frais de livraison</div>
                <div className="delimiter6">{charges} €</div>
              </div>
            </div>
            <div className="total1">
              <div className="cart-line2">
                <div className="delimiter5 total-text">Total</div>
                <div className="delimiter6 total-text">{total} €</div>
              </div>
            </div>
          </div>
        )}
        {cart.length === 0 && <div className="empty-cart">Votre panier est vide</div>}
      </div>
      {showPopup ? <Payment price={total} closePopup={togglePopup} onClearAll={onClearAll} /> : null}
    </div>
  );
};

export default Basket;
