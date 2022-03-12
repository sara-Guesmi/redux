// reducer==masna3
// action types
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  STATUS_TASK,
} from "../actionTypes/task";

// initialState

const initialState = {
  taskList: [
    { id: Math.random(), text: "task1", done: false },
    { id: Math.random(), text: "task2", done: false },
    { id: Math.random(), text: "task3", done: false },
    { id: Math.random(), text: "task4", done: false },
  ],

  x: 1,
  toggle: true,
};

// pure function : a function 2 Parameter (state, action)
// ! action it is an object :{ type , payload}
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    //type Add
    case ADD_TASK:
      return { ...state, taskList: [...state.taskList, action.payload] };
    //    type Delete
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id != action.payload),
      };

    case EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id == action.payload.id
            ? { ...task, text: action.payload.textEdited }
            : task
        ),
      };
    case STATUS_TASK:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id == action.payload ? { ...task, done: !task.done } : task
        ),
      };

    //  nothing
    default:
      return state;
  }
};

export default taskReducer;
