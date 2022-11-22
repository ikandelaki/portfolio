import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Hero.css";

const Hero = (props) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        const entry = entries[0];
        if (!entry.isIntersecting) {
          document.body.classList.add("sticky");
        }

        if (entry.isIntersecting) {
          document.body.classList.remove("sticky");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
      }
    );

    observer.observe(heroRef.current);
  }, []);

  return (
    <div ref={heroRef} className={`section-hero ${props.theme}`} id="hero">
      <h1>
        Hi, I'm <span className={`name ${props.theme}`}>Irakli</span>
      </h1>
      <h2>A web developer</h2>
      <h3>
        Learn more about
        <div>
          <Link to="about" spy={true} smooth={true} offset={-79} duration={500}>
            <span className={`about ${props.theme}`}>Me</span>
          </Link>
          /
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <span className={`about about--projects ${props.theme}`}>
              Projects
            </span>
          </Link>
        </div>
      </h3>
    </div>
  );
};

export default Hero;
