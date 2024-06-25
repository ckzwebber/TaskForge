import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Home.css";

const Home = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "Groceries",
      completed: false,
    },

    {
      id: 2,
      title: "Work",
      completed: true,
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="main">
        <h1>Your Lists</h1>
      </div>
    </>
  );
};

export default Home;
