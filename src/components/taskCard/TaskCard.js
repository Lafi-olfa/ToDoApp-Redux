import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { compTask, delTask } from "../../redux/action";
import EditTask from "../editTask/EditTask";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div style={{textTransform:"capitalize"}}>
      <h2 id={task.isDone? "complete" : "uncomplete"} > {task.action} </h2>
      <Button id="btn-del" variant="danger" onClick={()=> dispatch(delTask(task.id))}>delete</Button>{" "}
      <Button id="btn-comp" variant="success" onClick={()=>dispatch(compTask(task.id))} > {task.isDone ? "comp" :"uncomp"} </Button>{" "}
      <EditTask task={task} />

   </div>
  );
};

export default TaskCard;
