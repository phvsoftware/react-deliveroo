import React from "react";
import "./Menu.css";
import PopularIcon from "./PopularIcon";

const Menu = ({ menu, onClick }) => {
  return (
    <div
      className="menu"
      onClick={() => {
        onClick(menu);
      }}
    >
      <div className="menu-info">
        <h3>{menu.title}</h3>
        {menu.description && <p>{menu.description}</p>}
        <div className="menu-price">
          <span>{menu.price} €</span>
          {menu.popular && (
            <span className="menu-popular">
              <PopularIcon />
              Populaire
            </span>
          )}
        </div>
      </div>
      {menu.picture && (
        <div className="menu-img">
          <img
            src={menu.picture}
            alt=""
            onError={e => {
              //               // e.target.src = ReplacementImage;
              e.target.style = "display: none;"; //pb sur l'image de  Bircher Muesli
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Menu;
