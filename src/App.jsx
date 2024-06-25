import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from "./components/Task.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/TasksList" element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
