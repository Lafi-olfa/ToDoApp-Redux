import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASK,
} from "./actionTypes";

const init = {
  tasks: [
    { id: Math.random(), isDone: true, action: "learn redux" },
    { id: Math.random(), isDone: true, action: "learn react" },
    { id: Math.random(), isDone: false, action: "learn mongodb" },
  ],
  filter: false,
};
const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((el) => el.id !== payload) };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case FILTER_TASK:
      return { ...state, filter: !state.filter };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) => (el.id === payload.id ? payload : el)),
      };
    default:
      return state;
  }
};

export default reducer;
