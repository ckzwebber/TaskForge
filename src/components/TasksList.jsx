import React from "react";
import ShowOneTask from "./ShowOneTask";

const TasksList = ({
  soManyTasks,
  handleTaskClick,
  deleteTask,
  startEditingTask,
  editTaskId,
  editTaskTitle,
  handleEditTaskChange,
  saveEditedTask,
}) => {
  return (
    <div>
      {soManyTasks.map((task) => (
        <ShowOneTask
          key={task.id}
          showTheTask={task}
          handleTaskClick={handleTaskClick}
          deleteTask={deleteTask}
          startEditingTask={startEditingTask}
          editTaskId={editTaskId}
          editTaskTitle={editTaskTitle}
          handleEditTaskChange={handleEditTaskChange}
          saveEditedTask={saveEditedTask}
        />
      ))}
    </div>
  );
};

export default TasksList;
