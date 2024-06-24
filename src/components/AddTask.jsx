import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({ addNewTask }) => {
  const [task, setTask] = useState("");

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    addNewTask(task);
    setTask("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addNewTask(task);
      setTask("");
    }
  };

  return (
    <div class="form__group field">
      <input
        type="input"
        onChange={handleTaskChange}
        value={task}
        class="form__field"
        placeholder="Task"
        onKeyDown={handleKeyPress}
      ></input>

      <label for="task" class="form__label">
        New Task
      </label>
      <Button onClick={handleAddTask}>Add</Button>
    </div>
  );
};

export default AddTask;
