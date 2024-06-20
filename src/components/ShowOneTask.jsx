import React from "react";
import "./TheOneTask.css";

const ShowOneTask = ({ theTask }) => {
  return <div className="show-one-task">{theTask.title}</div>;
};

export default ShowOneTask;
