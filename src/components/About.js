import React from "react";
import "../styles/About.css";

const About = (props) => {
  return (
    <div className={`about-container ${props.theme}`} id='about'>
      <div className='section-about'>
        <div className={`about-description about--me ${props.theme}`}>
          <h2 className='number'>
            01.<span>a</span>
          </h2>
          <div className='flex-container'>
            <div>
              <h3 className='title-description'>
                ABOUT <span>ME</span>
              </h3>
              <div class='about-me-description'>
                <p>
                  I am a self-taught Full Stack web developer from Tbilisi,
                  Georgia. I am proficient at HTML, CSS, JavaScript, React and
                  PHP. I have a professional knowledge and experience with
                  abovementioned tools alongside with Git, Magento 2, MySQL,
                  AWS, Figma. I have worked with technologies like redux,
                  redux-thunk, react-router. I have a good understanding of
                  third-party APIs like REST and GraphQL.
                </p>
                <h4>Work-life</h4>
                <p class='job-title'>
                  06-2022 - Current &rarr; <span>Scandiweb</span>
                </p>
                <p>
                  Full stack Magento 2 developer. I develop Ecommerce web
                  applications using Magento 2, therefore my daily tasks involve
                  using tools like JavaScript, PHP, HTML, CSS. I get to work in
                  Agile development environment, therefore I have gotten much
                  experience with working with colleagues, participating in code
                  reviews, communicating with clients.
                </p>
                <a
                  href='https://github.com/ikandelaki/'
                  target='_blank'
                  rel='noreferrer'
                  className={`portf-link ${props.theme}`}
                >
                  See github profile
                </a>
              </div>
            </div>
            <div>
              <img src='images/skills.png' alt='different web skills' />
            </div>
          </div>
        </div>
        <div className={`about-description about--this ${props.theme}`}>
          <h2 className='number'>
            01.<span>b</span>
          </h2>
          <div className='flex-container'>
            <div>
              <h3 className='title-description'>
                ABOUT <span>THIS</span>
              </h3>
              <div class='about-me-description'>
                <p>
                  I built this project with React, to test my skills and gain
                  even more practice. I used react-scroll for navigation within
                  the page, as well as state to make some smooth animations
                  within the page. <br />
                  For styling I used plain css. I styled everything by hand
                  without using any of the third-party libraries. I used
                  photoshop to edit and alter the photos to make them fit the
                  portfolio better. <br />
                  In the end, I wanted the webpage to look somewhat
                  minimalistic, with a nice, easy feel. I also tried to make
                  them look good with two of my favourite colors: Blue and
                  Green.
                </p>
                <a
                  href='https://github.com/ikandelaki/portfolio'
                  target='_blank'
                  rel='noreferrer'
                  className={`portf-link ${props.theme}`}
                >
                  See the source code
                </a>
              </div>
            </div>
            <div>
              <img src='images/react-css.png' alt='built with react css' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
