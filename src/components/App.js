import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import Task from "./Task/";
import "./style.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dark, setDark] = useState(false);

  // Add Item to List
  const add = () => {
    if (newTask != "") {
      const temp = [...tasks];
      temp.push(newTask);
      setTasks(temp);
    }
    setNewTask("");
  };

  // Delete ith item from List
  const deleteItem = (i) => {
    const temp = [...tasks];
    if (i > -1) {
      temp.splice(i, 1);
    }
    setTasks(temp);
  };

  // Edit ith item to updatedText.
  const editItem = (i, updatedText) => {
    const temp = [...tasks];
    temp[i] = updatedText;
    setTasks(temp);
  };

  //Keep Track of new task input
  const updateNewTask = ({ target }) => {
    setNewTask(target.value);
  };

  //Return unorder list of tasks
  const renderList = () => {
    return (
      <ul>
        {tasks.map((val, index) => {
          return (
            <Task
              key={index}
              text={val}
              index={index}
              deleteCallback={deleteItem}
              editCallback={editItem}
              dark={dark}
            />
          );
        })}
      </ul>
    );
  };

  //Toggle Dark Theme
  const theme = () => {
    if (dark) {
      document.body.classList.add("dark-body");
      const inputs = document.querySelectorAll("input[type='text']");
      inputs.forEach((input) => {
        input.classList.add("dark-input");
      });
      const card = document.querySelector(".card");
      if (card != null) {
        card.classList.add("dark-card");
      }
      const tText = document.querySelector(".toggle-text");
      if (tText != null) {
        tText.classList.add("dark-toggle-text");
      }
    } else {
      document.body.classList.remove("dark-body");
      const inputs = document.querySelectorAll("input[type='text']");
      inputs.forEach((input) => {
        input.classList.remove("dark-input");
      });
      const card = document.querySelector(".card");
      if (card != null) {
        card.classList.remove("dark-card");
      }
      const tText = document.querySelector(".toggle-text");
      if (tText != null) {
        tText.classList.remove("dark-toggle-text");
      }
    }
  };

  useEffect(() => {
    theme();
  }, [dark]);

  return (
    <div id="main">
      {/*Dark theme Toggler*/}
      <div className="toggle">
        <span className="toggle-text">Dark Mode</span>
        <label className="switch">
          <input type="checkbox" onChange={(e) => setDark(e.target.checked)} />
          <span className="slider round"></span>
        </label>
      </div>

      {/*To-Do-List Card*/}
      <div className="card">
        <h1 className="heading">To Do List</h1>
        {renderList()}
        <div className="inputField">
          <input
            type="text"
            id="task"
            className="text-input text-input-blue"
            onChange={updateNewTask}
            placeholder="Enter new item here"
            autoFocus
            value={newTask}
          />
          <button id="btn" className="btn btn-right btn-blue" onClick={add}>
            Add
          </button>
        </div>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </div>
    </div>
  );
}

export default App;
