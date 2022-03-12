import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/action/task";

const AddTask = () => {
  const [text, setText] = useState("default value");
  const dispatch = useDispatch();
  const handleText = (e) => setText(e.target.value);
  const handleAdd = () => {
    if (text) {
      dispatch(addTask({ id: Math.random(), text: text, done: false }));
      setText("");
    } else {
      alert("can not add empty task");
    }
  };

  return (
    <div>
      <input type="text" onChange={handleText} value={text} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;
