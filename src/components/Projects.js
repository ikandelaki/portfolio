import React from "react";
import "./Projects.css";
import Project from "./Project";

class Projects extends React.Component {
  renderProjects = () => {
    return this.props.projects.map((project, i) => {
      return (
        <Project
          theme={this.props.theme}
          details={project}
          key={i + 1}
          id={i + 1}
        />
      );
    });
  };

  render() {
    return (
      <div className={`section-projects ${this.props.theme}`} id="projects">
        <div className="projects-container">
          <h2 className="number">02.</h2>
          <h3 className="title-description">PROJECTS</h3>
          <div className="projects-container--grid">
            {this.renderProjects()}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
