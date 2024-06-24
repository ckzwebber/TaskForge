import React from "react";
import "./ShowOneTask.css";

const ShowOneTask = ({ showTheTask, handleTaskClick }) => {
  return (
    <div className="tasks">
      <div className="show-one-task">{showTheTask.title}</div>
    </div>
  );
};

export default ShowOneTask;