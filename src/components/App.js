import React, { useState } from "react";
import "./../styles/App.css";
import Task from "./Task";

function App()
{
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const [list, setList] = useState();
	const add = () => {
		const temp = tasks;
		temp.push(newTask);
		setTasks(temp);
		setList(renderList());
	}
	const deleteItem = (i) => {
		const temp = tasks;
		if (i > -1) {
		  temp.splice(i, 1);
		}
		setTasks(temp);
		setList(renderList());
	}

	const updateNewTask = ({ target }) => {
    setNewTask(target.value)
  }

	const renderList = () => {
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
	{list}
	<input id="task" onChange={updateNewTask}/>
	<button id="btn" onClick={add}>Add</button>
	</div>
	);
}


export default App;
