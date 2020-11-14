import React, { useState } from "react";
import "./../styles/App.css";
import Task from "./Task/";
import './style.css';

function App(){
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const [list, setList] = useState();
	const add = () => {
		if(newTask != ""){
			const temp = tasks;
			temp.push(newTask);
			setTasks(temp);
			setList(renderList());
			setNewTask("");
		}
	}
	const deleteItem = (i) => {
		console.log(i);
		const temp = tasks;
		if (i > -1) {
			temp.splice(i, 1);
		}
		setTasks(temp);
		console.log("In delete " + tasks);
		setList(renderList());
	}

	const updateNewTask = ({ target }) => {
		setNewTask(target.value)
	}

	const renderList = () => {
		console.log(tasks);
		return (
			<ul>
			{
				tasks.map((val, index) => {
					return (
						<Task key={index} text={val} index={index} deleteCallback={deleteItem} renderCallback={renderList}/>
					);
				})
			}
			</ul>
		);
	}
	return (
		<div id="main">
			<h1 className="heading">To Do List</h1>
			{list}
			<div className="inputField">
				<input id="task" className="text-input-1" onChange={updateNewTask} placeholder="Enter new item here" autoFocus value={newTask}/>
				<button id="btn" className="btn btn-right btn-blue" onClick={add}>Add</button>
			</div>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
		</div>
	);
}


export default App;
