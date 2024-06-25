import React from "react";
import "./ShowOneTask.css";
import Checkbox from "./Checkbox";
import CheckboxOff from "./CheckboxOff";

const ShowOneTask = ({ showTheTask, handleTaskClick }) => {
  return (
    <div className="tasks">
      <div
        className="show-one-task"
        onClick={() => handleTaskClick(showTheTask.id)}
      >
        {showTheTask.title}
        {showTheTask.completed ? <Checkbox /> : <CheckboxOff />}
      </div>
    </div>
  );
};

export default ShowOneTask;
