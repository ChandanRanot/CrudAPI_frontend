import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Projects from "./components/projects";
import * as crudAPI from "./api.js";
import Students from "./components/students";
import NavBar from "./components/navbar";
import AddStudent from "./components/addStudent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      students: [],
      showModal: false,
      modalValue: "",
      projId: "",
    };
  }
  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  onChangeInput = (event) => {
    this.setState({ modalValue: event.target.value });
  };

  createNewProject = async () => {
    const res = await crudAPI.createNewProject(this.state.modalValue);
    const newProject = await res.json();
    this.setState({
      projects: [...this.state.projects, newProject],
      showModal: !this.state.showModal,
      modalValue: "",
    });
  };

  async fetchProjects() {
    const res = await crudAPI.getProjects();
    const projects = await res.json();
    this.setState({ projects });
  }

  async getStudents(projId) {
    const res = await crudAPI.fetchStudents(projId);
    const students = await res.json();
    this.setState({ students, projId });
  }

  addStudent = async (name, email, age, dob, projId) => {
    const res = await crudAPI.addNewStudent(name, email, age, dob, projId);
    const newStudent = await res.json();
    this.setState({ students: [...this.state.students, newStudent] });
  };

  componentDidMount() {
    this.fetchProjects();
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <main className="d-flex">
            <Switch>
              <Route path="/" exact>
                <Projects
                  projects={this.state.projects}
                  getStudents={(projId) => this.getStudents(projId)}
                  handleModal={this.handleModal}
                  showModal={this.state.showModal}
                  modalValue={this.state.modalValue}
                  onChangeInput={this.onChangeInput}
                  createNewProject={this.createNewProject}
                />
              </Route>
              <Route path={`/projects/${this.state.projId}`}>
                <div className="d-flex">
                  <Students students={this.state.students} />
                  <AddStudent
                    projectId={this.state.projId}
                    addNewStudent={(name, email, age, dob, projId) =>
                      this.addStudent(name, email, age, dob, projId)
                    }
                  />
                </div>
              </Route>
            </Switch>
          </main>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
