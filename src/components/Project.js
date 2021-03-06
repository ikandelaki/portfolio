import React from "react";
import cardistry from "../images/cardistry.png";

import "./Project.css";

class Project extends React.Component {
  state = { hover: false };

  addHover = () => {
    this.setState({ hover: true });
  };

  removeHover = () => {
    this.setState({ hover: false });
  };

  render() {
    return (
      <div className="project-container">
        <div className="project-box">
          <h5 className={`number--small ${this.props.theme}`}>
            0{this.props.id}.
          </h5>
          <div
            className="project-card"
            onMouseOver={this.addHover}
            onMouseOut={this.removeHover}
          >
            <div className="project-img">
              <a href={this.props.details.siteLink} target="_blank">
                <img src={this.props.details.image} />
              </a>
            </div>
            <h4 className="project-title">{this.props.details.title}</h4>
            <div className="project-links">
              <a
                href={this.props.details.siteLink}
                className={`link--live ${this.props.theme}`}
                target="_blank"
              >
                See Live
              </a>
              <a
                href={this.props.details.sourceLink}
                className={`link--source ${this.props.theme}`}
                target="_blank"
              >
                Source code
              </a>
            </div>
          </div>
        </div>
        <div
          className={`project-description ${this.props.theme} ${
            this.state.hover ? "hover" : ""
          }`}
        >
          <p>{this.props.details.description}</p>
        </div>
      </div>
    );
  }
}

export default Project;
