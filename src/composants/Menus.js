import React from "react";
import "./Menus.css";
import Menu from "../composants/Menu";

const Menus = ({ title, menus, onClick }) => {
  return (
    <div className="menus">
      <h2>{title}</h2>
      <div className="menus-container">
        {menus &&
          menus.map((menu, index) => {
            return <Menu key={menu.id} menu={menu} onClick={onClick} />;
          })}
      </div>
    </div>
  );
};

export default Menus;
