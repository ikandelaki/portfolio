import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

class App extends React.Component {
  state = { theme: "blue" };

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header theme={this.state.theme} />
        </BrowserRouter>
        <Hero theme={this.state.theme} />
      </div>
    );
  }
}

export default App;
