import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const CreateProject = ({ onModal, show, value, handleChange, handleClick }) => {
  return (
    <div>
      <button onClick={onModal} className="card m-2 bg-light">
        <div className="card-body">+ Create new project</div>
      </button>
      <Modal animation={false} show={show} onHide={onModal}>
        <ModalHeader closeButton>Add Project Name</ModalHeader>
        <ModalBody>
          <input type="text" value={value} onChange={handleChange} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClick}>Add</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateProject;
