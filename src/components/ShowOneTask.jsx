import React from "react";
import "./ShowOneTask.css";
import Checkbox from "./Checkbox";
import CheckboxOff from "./CheckboxOff";

const ShowOneTask = ({ showTheTask, handleTaskClick, deleteTask }) => {
  return (
    <div className="tasks">
      <div className="show-one-task">
        {showTheTask.title}
        <div className="controls">
          <button
            className="delete-button"
            onClick={() => deleteTask(showTheTask.id)}
          >
            X
          </button>
          <div
            className="check"
            onClick={() => handleTaskClick(showTheTask.id)}
          >
            {showTheTask.completed ? <Checkbox /> : <CheckboxOff />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOneTask;
