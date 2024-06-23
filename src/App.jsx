import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import TasksList from "./components/TasksList.jsx";
import AddTask from "./components/AddTask.jsx";
import "./App.css";

const App = () => {
  const [tasksObject, setTasksObject] = useState([
    {
      id: 1,
      title: "Estudar",
      completed: false,
    },

    {
      id: 2,
      title: "Fazer Exercício",
      completed: true,
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="main">
        <TasksList soManyTasks={tasksObject} />
        <AddTask />
      </div>
      ;
    </>
  );
};

export default App;
