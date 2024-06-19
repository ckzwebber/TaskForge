import React, { useState } from "react";
import TasksList from "./components/TasksList.js";
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
      <div className="main">
        <TasksList soManyTasks={tasksObject} />
      </div>
      ;
    </>
  );
};

export default App;
