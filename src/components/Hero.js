import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className={`section-hero ${props.theme}`}>
      <h1>
        Hi, I'm <span className={`name ${props.theme}`}>Irakli</span>
      </h1>
      <h2>A web developer</h2>
      <h3>
        Learn more about<span className={`about ${props.theme}`}>Me</span>/
        <span className={`about about--projects ${props.theme}`}>Projects</span>
      </h3>
    </div>
  );
};

export default Hero;
