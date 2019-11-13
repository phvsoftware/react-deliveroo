import React from "react";
import "./MenuContainer.css";
import Menus from "../composants/Menus";
import Basket from "../composants/Basket";

const MenuContainer = ({ menu, onAddCart, cart, onChangeQuantity, subTotal, charges, total, onClearAll }) => {
  return (
    <div className="menu-container">
      <div className="menu-container2">
        {Object.keys(menu).map((sousmenu, index) => {
          const ok = menu[sousmenu].length > 0;
          return ok ? <Menus key={index} title={sousmenu} menus={menu[sousmenu]} onClick={onAddCart} /> : null;
        })}
      </div>
      <Basket cart={cart} onChangeQuantity={onChangeQuantity} subTotal={subTotal} charges={charges} total={total} onClearAll={onClearAll} />
    </div>
  );
};

export default MenuContainer;
