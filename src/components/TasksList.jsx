import React from "react";
import ShowOneTask from "./ShowOneTask";

const TasksList = ({ soManyTasks, handleTaskClick, deleteTask }) => {
  return (
    <>
      {soManyTasks.map((theTask) => (
        <ShowOneTask
          showTheTask={theTask}
          handleTaskClick={handleTaskClick}
          deleteTask={deleteTask}
        />
      ))}
    </>
  );
};

export default TasksList;
