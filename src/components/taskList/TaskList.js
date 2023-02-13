import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "../taskCard/TaskCard";

const TaskList = () => {
  const { tasks, filter } = useSelector((state) => state);
  return (
    <div>
      {filter
        ? tasks
            .filter((el) => el.isDone === false)
            .map((el) => (
              <div key={el.id}>
                <TaskCard task={el} />
              </div>
            ))
        : tasks.map((el) => (
            <div key={el.id}>
              <TaskCard task={el} />
            </div>
            
          ))} 
    </div>
  );
};

export default TaskList;
