import React from "react";
import "../styles/App.css";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import "../styles/queries.css";

class App extends React.Component {
  state = {
    theme: "blue",
  };

  changeTheme = (color) => {
    this.setState({ theme: color });
  };

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>&mdash; Portfolio</title>
          <link rel='canonical' href='http://mysite.com/example' />
          <meta name='description' content='Personal portfolio' />
        </Helmet>
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
