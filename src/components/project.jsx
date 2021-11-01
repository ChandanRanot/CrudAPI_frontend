import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project, handleClick }) => {
  return (
    <Link to={`/projects/${project.id}`} style={{ textDecoration: "none" }}>
      <button
        onClick={() => handleClick(project.id)}
        className="card m-2 bg-secondary"
        style={{ color: "white" }}
      >
        <div className="card-body">{project.name}</div>
      </button>
    </Link>
  );
};

export default Project;
