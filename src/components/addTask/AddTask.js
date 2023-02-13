import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { taskAdd, taskFilter } from "../../redux/action";

const AddTask = () => {
  //appel lel state
  const { tasks } = useSelector((state) => state);
  const counterCompleted = tasks.filter((el) => el.isDone).length;
  //pour chaque input on a une state
  const [text, setText] = useState("");
  //
  const handelChange = (e) => {
    setText(e.target.value);
  };
  //handelAdd qui est dans reducer
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state);

  //handel submit
  const handelSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Math.random(), action: text, isDone: true };
    text.trim() === "" ? alert("add a text") : dispatch(taskAdd(newTask));
    setText("");
  };
  return (
    <div>
      <form action="" onSubmit={handelSubmit}>
        <p id="total"> total tasks: {tasks.length} </p>
        <p id="completed"> completed Tasks: {counterCompleted} </p>
        <input id="input"
          type="text"
          value={text}
          onChange={handelChange}
          placeholder="add a new task"
        />
        <Button id="btn-add" type="submit" variant="warning">
          Add{" "}
        </Button>{" "}
        <Button variant="light" onClick={() => dispatch(taskFilter())}>
          {" "}
          {filter ? "all tasks " : " uncomplete"}{" "}
        </Button>{" "}
      </form>
    </div>
  );
};

export default AddTask;
