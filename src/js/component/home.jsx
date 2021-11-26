import React, { useState } from "react";
import Item from "./item.jsx";

const Home = () => {
	//Hooks
	const [value, setValue] = useState("");
	const [items, setItems] = useState([]);
	const [counter, setCounter] = useState(items.length);

	//Function that creates a new item inside the array when press Enter
	const createNewTask = ev => {
		if (ev.key == "Enter" && value != "") {
			setItems(items => [...items, { name: value }]);
			setCounter(counter + 1);
			setValue("");
		}
	};

	//Function that deletes an element inside the array when press button
	const deleteTask = index => {
		let newArray = [...items];
		newArray.splice(index, 1);
		setItems(newArray);
		setCounter(counter - 1);
	};

	//Function of the task structure
	const taskList = items.map((item, index) => {
		<Item name={item.name} key={index} click={deleteTask} />;
	});

	//Function that shows the number of tasks
	const pendingTask = () => {
		if (counter == 0) return "No task";
		else return counter;
	};

	return (
		<>
			<div className="container-fluid body d-flex align-items-center justify-content-center">
				<div className="container content">
					<div className="container d-flex flex-column align-items-center text-white">
						<h1>Friday</h1>
						<p>26/11/2021</p>
						<p>{pendingTask()}</p>
					</div>
					<input
						type="text"
						placeholder="Add a task..."
						onChange={ev => {
							setValue(ev.target.value);
						}}
						onKeyPress={ev => {
							createNewTask(ev);
						}}
						value={value}
					/>
					<ul>{taskList}</ul>
				</div>
			</div>
		</>
	);
};

export default Home;
