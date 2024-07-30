import React, { useState, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from "./components/Task.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/Tasks" element={<Task />} />
          <Route path="*" element={<Task />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
