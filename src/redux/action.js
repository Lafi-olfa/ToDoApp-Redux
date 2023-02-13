import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASK,
} from "./actionTypes";

export const delTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};
export const compTask = (taskId) => {
  return {
    type: COMPLETE_TASK,
    payload: taskId,
  };
};
export const taskAdd = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};
export const taskFilter = () => {
  return {
    type: FILTER_TASK,
    // payload:,
  };
};
export const taskEdit = (editedTask) => {
  return {
    type: EDIT_TASK,
    payload: editedTask,
  };
};
