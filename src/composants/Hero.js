import React from "react";
import "./Hero.css";

const Hero = ({ title, description, image }) => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="hero-img">
          <img src={image} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
