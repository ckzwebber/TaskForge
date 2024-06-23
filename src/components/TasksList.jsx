import React from "react";
import ShowOneTask from "./ShowOneTask";

const TasksList = ({ soManyTasks }) => {
  return (
    <>
      {soManyTasks.map((theTask) => (
        <ShowOneTask showTheTask={theTask} />
      ))}
    </>
  );
};

export default TasksList;
