import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { taskEdit } from "../../redux/action";
const EditTask = ({ task }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //pour chaque input state
  const [etext, setEtext] = useState(task.action);
  // dispatch pour activer la fonction editedText
  const dispatch = useDispatch();
  //handelEdit
  const handelEdit = (e) => {
    e.preventDefault();
    const editedTask = { id: task.id, isDone: task.isDone, action: etext };
    dispatch(taskEdit(editedTask));
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handelEdit}>
            <input
              type="text"
              value={etext}
              onChange={(e) => setEtext(e.target.value)}
            />

            <Button type="submit" variant="primary" onClick={handleClose}>
              Save
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditTask;
