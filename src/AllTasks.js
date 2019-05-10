import React, { Component } from "react";
import Task from "./Task";
import ls from "local-storage";

class AllTasks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			tasks: []
		};
	}

	componentDidMount() {
		console.log("On charge les tasks !");

		const tasksToStore = [
			{
				id: 1,
				title: "premiere liste",
				description: "ma premiere liste",
				startTime: "12/05",
				endTime: "20/05"
			},
			{
				id: 2,
				title: "deuxieme liste",
				description: "",
				startTime: "12/05",
				endTime: "20/05"
			}
		];

		const totoToStore = {
			id: 2,
			title: "deuxieme liste",
			description: "",
			startTime: "12/05",
			endTime: "20/05"
		};

		ls.clear();
		ls.set("tasks", tasksToStore);
		ls.set("toto", totoToStore);

		var tasks = ls.get("tasks") || null;
		console.log(tasks);
		var toto = ls.get("toto") || null;
		console.log(toto);
		this.setState({ isLoaded: true, tasks: tasks });
		// fetch("http://localhost:3000/api/tasks")
		// 	.then(res => res.json())
		// 	.then(
		// 		result => {
		// 			this.setState({
		// 				isLoaded: true,
		// 				tasks: result.data
		// 			});
		// 		},
		// 		// Note: it's important to handle errors here
		// 		// instead of a catch() block so that we don't swallow
		// 		// exceptions from actual bugs in components.
		// 		error => {
		// 			this.setState({
		// 				isLoaded: true,
		// 				error
		// 			});
		// 		}
		// 	);
	}

	render() {
		const { error, isLoaded, tasks } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			if (tasks) {
				return (
					<ul>
						{tasks.map(task => (
							<React.Fragment>
								<Task
									id={task.id}
									title={task.title}
									description={task.description}
									startTime={task.startTime}
									endTime={task.endTime}
								/>
								<br />
							</React.Fragment>
						))}
					</ul>
				);
			} else {
				return <p>Aucune tache existante</p>;
			}
		}
	}
}

export default AllTasks;
