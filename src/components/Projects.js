import React from "react";
import "../styles/Projects.css";
import Project from "./Project";
import projects from "../data/projects.json";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: "personal",
    };
    this.projectTypesRef = React.createRef();
    this.projectGridRef1 = React.createRef();
    this.projectGridRef2 = React.createRef();
  }

  handleProjectChange(project) {
    this.setState({ activeProject: project });
    if (project === "real-world") {
      this.projectTypesRef.current.style.transform = "translateX(-100%)";
      this.projectTypesRef.current.style.height =
        this.projectGridRef2.current.clientHeight;
    }

    if (project === "personal") {
      this.projectTypesRef.current.style.transform = "translateX(0)";
      this.projectTypesRef.current.style.height =
        this.projectGridRef1.current.clientHeight;
    }

    console.log(this.projectTypesRef.current.offsetHeight);
  }

  renderProjects = () => {
    return projects.map((projectType, i) => {
      return (
        <div
          ref={i === 0 ? this.projectGridRef1 : this.projectGridRef2}
          className="projects-container--grid"
        >
          {projectType.length ? (
            projectType.map((project, j) => {
              return (
                <Project
                  theme={this.props.theme}
                  details={project}
                  key={i + j + 1}
                  id={j + 1}
                />
              );
            })
          ) : (
            <div className={`no-projects ${this.props.theme}`}>
              No projects yet...
            </div>
          )}
        </div>
      );
    });
  };

  render() {
    return (
      <div className={`section-projects ${this.props.theme}`} id="projects">
        <div className="projects-container">
          <h2 className="number">02.</h2>
          <div className="project-title-descriptions">
            <h3
              className={`title-description ${
                this.state.activeProject === "personal" ? "active" : ""
              }`}
              onClick={() => this.handleProjectChange("personal")}
            >
              PERSONAL PROJECTS
            </h3>
            <h3
              className={`title-description ${
                this.state.activeProject === "real-world" ? "active" : ""
              }`}
              onClick={() => this.handleProjectChange("real-world")}
            >
              REAL-WORLD PROJECTS
            </h3>
          </div>
          <div ref={this.projectTypesRef} className="project-types-container">
            {this.renderProjects()}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
