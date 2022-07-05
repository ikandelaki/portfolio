import React from "react";
import "./App.css";

import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import cardistry from "../images/cardistry.png";
import countries from "../images/countries.png";

class App extends React.Component {
  state = {
    theme: "blue",
    projects: [
      {
        image: cardistry,
        title: "Cardistry",
        description:
          "This is the first webpage I've ever built and published. It is about the astonishing art of cardistry which I am really fond of. It was built with plain HTML, CSS and JS. I applied some design principles and tried to make it look appealing. I also used JavaScript to make use of sticky navigation, as well as smooth scrolling and responsive menu bar.",
        siteLink: "https://cardistry-irakli.netlify.app/",
        sourceLink: "https://github.com/ikandelaki/cardistry-project",
      },
      {
        image: countries,
        title: "Countries",
        description:
          "I built this project with plain JavaScript. I used the RESTCountries api to fetch data about the countries and then displayed them with DOM manipulation.",
        siteLink: "https://countries-irakli.netlify.app/",
        sourceLink: "https://github.com/ikandelaki/countries-project",
      },
    ],
  };

  changeTheme = (color) => {
    this.setState({ theme: color });
  };

  render() {
    return (
      <div>
        <Header theme={this.state.theme} changeTheme={this.changeTheme} />
        <Hero theme={this.state.theme} />
        <About theme={this.state.theme} />
        <Projects theme={this.state.theme} projects={this.state.projects} />
        <Contact theme={this.state.theme} />
      </div>
    );
  }
}

export default App;
