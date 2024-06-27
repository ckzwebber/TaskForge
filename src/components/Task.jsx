import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import TasksList from "./TasksList.jsx";
import AddTask from "./AddTask.jsx";
import axios from "axios";
import "../App.css";

const Task = () => {
  const [tasksObject, setTasksObject] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/tasks")
      .then((response) => {
        setTasksObject(response.data);
      })
      .catch((error) => {
        console.error("There was an error when searching for tasks:", error);
      });
  }, []);

  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskTitle, setEditTaskTitle] = useState("");

  const handleFunctionTaskClick = (taskId) => {
    const newTasks = tasksObject.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasksObject(newTasks);
  };

  const addNewTask = (taskTitle) => {
    axios
      .post("http://localhost:3030/tasks", {
        title: taskTitle,
        completed: false,
      })
      .then((response) => {
        setTasksObject([...tasksObject, response.data]);
      })
      .catch((error) => {
        console.error("There was an error creating the task:", error);
      });
  };

  const deleteTask = (taskId) => {
    axios
      .delete(`http://localhost:3030/tasks/${taskId}`)
      .then(() => {
        setTasksObject(tasksObject.filter((task) => task.id !== taskId));
      })
      .catch((error) => {
        console.error(
          `There was an error deleting the task with ID ${taskId}:`,
          error
        );
      });
  };

  const startEditingTask = (taskId, taskTitle) => {
    setEditTaskId(taskId);
    setEditTaskTitle(taskTitle);
  };

  const handleEditTaskChange = (e) => {
    setEditTaskTitle(e.target.value);
  };

  const saveEditedTask = (taskId) => {
    // axios
    //   .put(`http://localhost:3030/tasks/${taskId}`, updatedTask)
    //   .then(() => {
    //     setTasksObject(
    //       tasksObject.map((task) => (task.id === taskId ? updatedTask : task))
    //     );
    //   })
    //   .catch((error) => {
    //     console.error(
    //       `There was an error updating the task with ID${taskId}:`,
    //       error
    //     );
    //   });

    const newTasks = tasksObject.map((task) => {
      if (task.id === taskId) return { ...task, title: editTaskTitle };
      return task;
    });
    setTasksObject(newTasks);
    setEditTaskId(null);
    setEditTaskTitle("");
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
          startEditingTask={startEditingTask}
          editTaskId={editTaskId}
          editTaskTitle={editTaskTitle}
          handleEditTaskChange={handleEditTaskChange}
          saveEditedTask={saveEditedTask}
        />
        <AddTask addNewTask={addNewTask} />
      </div>
    </>
  );
};

export default Task;
