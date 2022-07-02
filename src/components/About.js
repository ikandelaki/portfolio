import React from "react";
import "./About.css";
import skills from "../images/skills.png";
import reactCss from "../images/react-css.png";

const About = (props) => {
  return (
    <div className={`about-container ${props.theme}`} id="about">
      <div className="section-about">
        <div className={`about-description about--me ${props.theme}`}>
          <h2 className="number">
            01.<span>a</span>
          </h2>
          <div className="flex-container">
            <div>
              <h3 className="title-description">
                ABOUT <span>ME</span>
              </h3>
              <p>
                I am a self-taught web developer focused mainly on front-end. My
                passion for this profession has been ever-growing and my goal is
                to become a fully-fledged professional. I am proficient at HTML,
                CSS, JavaScript, I have a good knowledge and understanding of
                React and PHP, alongside with MySQL. I have worked with
                technologies like redux, redux-thunk, react-router. I have a
                good understanding of third-party APIs and a solid working
                ground of web in general. However, I know that I have a lot to
                learn and I am excited to pursue the rest of the journey.
              </p>
            </div>
            <div>
              <img src={skills} alt="different web skills" />
            </div>
          </div>
        </div>
        <div className={`about-description about--this ${props.theme}`}>
          <h2 className="number">
            01.<span>b</span>
          </h2>
          <div className="flex-container">
            <div>
              <h3 className="title-description">
                ABOUT <span>THIS</span>
              </h3>
              <p>
                I built this project with React, to test my skills and gain even
                more practice. I used react-router-dom and
                react-router-hash-link for navigation within the page, as well
                as state to change the color of the theme. <br />
                For styling I used plain css. I styled everything by hand
                without using any of the third-party libraries. I used photoshop
                to edit and alter the photos to make them fit the portfolio
                better. <br />
                In the end, I wanted the webpage to look somewhat minimalistic,
                with a nice, easy feel. I also tried to make them look good with
                two of my favourite colors: Blue and Green.
              </p>
            </div>
            <div>
              <img src={reactCss} alt="built with react css" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
