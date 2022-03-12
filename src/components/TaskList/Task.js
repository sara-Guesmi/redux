import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, statusTask } from "../../JS/action/task";

const Task = ({ task }) => {
  const [edit, setEdit] = useState(false);
  const [editedText, seteditedText] = useState(task.text);
  //   2 - send to an action to update the a data =state
  //  to contact reducer we user useDispatch
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    //? diapcth a function that takes an action
    dispatch(deleteTask(id));
  };

  const handleDone = (id) => {
    dispatch(statusTask(id));
  };
  const handleEdit = () => {
    dispatch(editTask(task.id, editedText));

    setEdit(false);
  };
  const handleCancel = () => {
    setEdit(false);
    seteditedText(task.text);
  };
  return (
    <div key={task.id}>
      {edit ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => seteditedText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <span className={task.done ? "textDone" : null}>{task.text}</span>
      )}
      <button onClick={() => handleDelete(task.id)}>delete</button>
      <button onClick={() => setEdit(true)}>edit</button>
      <button onClick={() => handleDone(task.id)}>
        {task.done ? "undone" : "done"}
      </button>
    </div>
  );
};

export default Task;
