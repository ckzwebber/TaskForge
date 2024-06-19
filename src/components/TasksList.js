import React from "react";
import ShowOneTask from "./TheOneTask.js";

const TasksList = ({ soManyTasks }) => {
  return (
    <>
      {soManyTasks.map((theTask) => (
        <ShowOneTask theTask={theTask} />
      ))}
    </>
  );
};

export default TasksList;
