import React, { Component } from "react";

import Project from "./project";
import CreateProject from "./createProject";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.projects.map((project) => {
          return (
            <Project
              key={project.id}
              project={project}
              handleClick={(projId) => this.props.getStudents(projId)}
            />
          );
        })}
        <CreateProject
          onModal={this.props.handleModal}
          show={this.props.showModal}
          value={this.props.modalValue}
          handleChange={this.props.onChangeInput}
          handleClick={this.props.createNewProject}
        />
      </>
    );
  }
}

export default Projects;
