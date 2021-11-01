import React from "react";

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      name: "",
      email: "",
      age: "",
      dob: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handleAgeChange = (e) => {
    this.setState({ age: e.target.value });
  };

  handleClose = (e) => {
    e.preventDefault();
    this.setState({ showForm: !this.state.showForm });
  };
  handleDobChange = (e) => {
    this.setState({ dob: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewStudent(
      this.state.name,
      this.state.email,
      this.state.age,
      this.state.dob,
      this.props.projectId
    );
    this.setState({
      showForm: !this.state.showForm,
      name: "",
      email: "",
      age: "",
      dob: "",
    });
  };

  showForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            placeholder="Enter Name"
            className="form-control"
          />
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder="Enter Email"
            className="form-control"
          />
          <input
            type="number"
            value={this.state.age}
            onChange={this.handleAgeChange}
            placeholder="Enter Age"
            className="form-control"
          />
          <input
            type="date"
            value={this.state.dob}
            onChange={this.handleDobChange}
            placeholder="Enter DOB"
            className="form-control"
          />
        </div>
        <input type="submit" value="Add" className="btn btn-primary btn-sm" />
        <button onClick={this.handleClose} className="btn btn-light btn-sm">
          X
        </button>
      </form>
    );
  };
  render() {
    return (
      <div>
        {this.state.showForm ? (
          this.showForm()
        ) : (
          <button
            className="btn btn-light btn-small m-2"
            onClick={() => this.setState({ showForm: !this.state.showForm })}
          >
            + Add Student
          </button>
        )}
      </div>
    );
  }
}

export default AddStudent;
