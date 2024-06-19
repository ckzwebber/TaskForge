import React from "react";
import TheTask from "./TheTask";

const TasksList = ({ soManyTasks }) => {
  return (
    <>
      {soManyTasks.map((theTask) => (
        <TheTask theTask={theTask} />
      ))}
    </>
  );
};

export default TasksList;
