import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import TasksList from "./TasksList.jsx";
import AddTask from "./AddTask.jsx";
import { v7 as uuidv7 } from "uuid";
import "../App.css";

const Task = () => {
  const [tasksObject, setTasksObject] = useState([
    {
      id: 1,
      title: "Estudar",
      completed: false,
    },

    {
      id: 2,
      title: "Fazer Exercício",
      completed: false,
    },
  ]);

  const handleFunctionTaskClick = (taskId) => {
    const newTasks = tasksObject.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasksObject(newTasks);
  };

  const addNewTask = (taskTitle) => {
    const newTask = {
      id: uuidv7(),
      title: taskTitle === "" ? (taskTitle = "No title") : taskTitle,
      completed: false,
    };

    setTasksObject([...tasksObject, newTask]);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasksObject.filter((task) => task.id !== taskId);

    setTasksObject(newTasks);
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <Header />
        <TasksList
          soManyTasks={tasksObject}
          handleTaskClick={handleFunctionTaskClick}
          deleteTask={deleteTask}
        />
        <AddTask addNewTask={addNewTask} />
      </div>
      ;
    </>
  );
};

export default Task;
