import React from "react";
import "./ShowOneTask.css";
import Checkbox from "./Checkbox";
import CheckboxOff from "./CheckboxOff";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";

const ShowOneTask = ({ showTheTask, handleTaskClick, deleteTask }) => {
  return (
    <div className="tasks">
      <div className="show-one-task">
        {showTheTask.title}
        <div className="controls">
          <button
            class="delete-button"
            onClick={() => deleteTask(showTheTask.id)}
          >
            <svg height="17.5" width="15" class="icon">
              <path
                transform="translate(-2.5 -1.25)"
                d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                id="Fill"
              ></path>
            </svg>
          </button>
          <MdOutlineEdit className="edit" />
          <div
            className="check"
            onClick={() => handleTaskClick(showTheTask.id)}
          >
            {showTheTask.completed ? <Checkbox /> : <CheckboxOff />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOneTask;
