// add
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  STATUS_TASK,
} from "../actionTypes/task";

// function that return Object
export const addTask = (newTask) => {
  // action==object {type,payload}
  return { type: ADD_TASK, payload: newTask };
};

//delete
export const deleteTask = (idTask) => {
  return { type: DELETE_TASK, payload: idTask };
};

// when we click to the edit button we should send 2 parameters
// parameter 1 the id of the task to be edited
//  the new text to edit with
export const editTask = (id, textEdited) => {
  return { type: EDIT_TASK, payload: { textEdited, id } };
};
// when we click into the done button we send the id of the clicked task
export const statusTask = (id) => {
  return { type: STATUS_TASK, payload: id };
};
