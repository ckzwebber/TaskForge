import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import TasksList from "./TasksList.jsx";
import AddTask from "./AddTask.jsx";
import axios from "axios";
import "../App.css";

const Task = () => {
  const [tasksObject, setTasksObject] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskTitle, setEditTaskTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3030/tasks");
      setTasksObject(response.data);
    } catch (error) {
      console.error("There was an error when searching for tasks:", error);
    }
  };

  const handleFunctionTaskClick = async (taskId) => {
    const task = tasksObject.find((task) => task.id === taskId);
    if (task) {
      try {
        await axios.put(`http://localhost:3030/tasks/${taskId}`, {
          title: task.title,
          completed: !task.completed,
        });
        const updatedTasks = tasksObject.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasksObject(updatedTasks);
      } catch (error) {
        console.error(
          `There was an error updating the task with ID ${taskId}:`,
          error
        );
      }
    }
  };

  const addNewTask = async (taskTitle) => {
    try {
      const response = await axios.post("http://localhost:3030/tasks", {
        title: taskTitle,
        completed: false,
      });
      setTasksObject([...tasksObject, response.data]);
    } catch (error) {
      console.error("There was an error creating the task:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3030/tasks/${taskId}`);
      setTasksObject(tasksObject.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error(
        `There was an error deleting the task with ID ${taskId}:`,
        error
      );
    }
  };

  const startEditingTask = (taskId, taskTitle) => {
    setEditTaskId(taskId);
    setEditTaskTitle(taskTitle);
  };

  const handleEditTaskChange = (e) => {
    setEditTaskTitle(e.target.value);
  };

  const saveEditedTask = async (taskId) => {
    const task = tasksObject.find((task) => task.id === taskId);
    if (task) {
      try {
        await axios.put(`http://localhost:3030/tasks/${taskId}`, {
          title: editTaskTitle,
          completed: task.completed,
        });
        const updatedTasks = tasksObject.map((task) =>
          task.id === taskId ? { ...task, title: editTaskTitle } : task
        );
        setTasksObject(updatedTasks);
        setEditTaskId(null);
        setEditTaskTitle("");
      } catch (error) {
        console.error(
          `There was an error updating the task with ID ${taskId}:`,
          error
        );
      }
    }
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
