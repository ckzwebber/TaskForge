import React from "react";
import "./ShowOneTask.css";
import Checkbox from "./Checkbox";
import CheckboxOff from "./CheckboxOff";

const ShowOneTask = ({ showTheTask, handleTaskClick, deleteTask }) => {
  return (
    <div className="tasks">
      <div
        className="show-one-task"
        onClick={() => handleTaskClick(showTheTask.id)}
      >
        {showTheTask.title}
        <button
          className="delete-button"
          onClick={() => deleteTask(showTheTask.id)}
        >
          x
        </button>
        {showTheTask.completed ? <Checkbox /> : <CheckboxOff />}
      </div>
    </div>
  );
};

export default ShowOneTask;
