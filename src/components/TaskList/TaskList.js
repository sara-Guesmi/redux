import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import "./TaskList.css";
const TaskList = () => {
  // const [, set] = useState(second)
  const [filter, setFilter] = useState("all");
  //   all  done undone
  // import state taskList from the global store (Redux)
  //  ? how to import Data from the store => useSelector
  // ! with combined reducer => to the small reducer  =>data
  const tasks = useSelector((store) => store.taskReducer.taskList);

  return (
    <div>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("undone")}>undone</button>
      </div>
      {filter == "done"
        ? tasks
            .filter((el) => el.done === true)
            .map((el) => <Task task={el} key={el.id} />)
        : filter == "undone"
        ? tasks
            .filter((el) => el.done === false)
            .map((el) => <Task task={el} key={el.id} />)
        : tasks.map((el) => <Task task={el} key={el.id} />)}
    </div>
  );
};

export default TaskList;
