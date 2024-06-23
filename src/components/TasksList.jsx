import React from "react";
import ShowOneTask from "./ShowOneTask";

const TasksList = ({ soManyTasks, handleTaskClick }) => {
  return (
    <>
      {soManyTasks.map((theTask) => (
        <ShowOneTask showTheTask={theTask} handleTaskClick={handleTaskClick} />
      ))}
    </>
  );
};

export default TasksList;
