import React, { useState } from "react";
        import Navbar from "./Navbar.jsx";
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
          completed: true,
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
          title: taskTitle,
          completed: false,
        };
    
        setTasksObject([...tasksObject, newTask]);
    
      };

    return ( 
            <>
              <Navbar />
              <div className="main">
                <TasksList soManyTasks={tasksObject} handleTaskClick={handleFunctionTaskClick} />
                <AddTask addNewTask={addNewTask} />
              </div>
              ;
            </>
          );
        };
 
export default Task;

