import React from "react";
import "./Title.css";
import logo from "../images/deliveroo.png";

const Title = () => {
  return (
    <div className="title">
      <div className="title-logo">
        <img src={logo} alt="Deliveroo"></img>
      </div>
    </div>
  );
};

export default Title;
