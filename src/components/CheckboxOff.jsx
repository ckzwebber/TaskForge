import React from "react";
import "./Checkbox.css";

const Checkbox = () => {
  return (
    <label class="container">
      <input type="checkbox" />
      <div class="checkmark"></div>
    </label>
  );
};

export default Checkbox;
