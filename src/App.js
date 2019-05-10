import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import AllTasks from "./AllTasks";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					{/* <img src={logo} className="App-logo" alt="logo" /> */}
					<a
						className="App-link"
						href="#"
						// target="_blank"
						rel="noopener noreferrer"
					>
						Home
					</a>
				</header>
				<main className="App-main">
					<h1>ToDo List</h1>
					<AllTasks />
				</main>
			</div>
		);
	}
}

export default App;
