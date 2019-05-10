import React, { Component } from "react";
import { string, bool, arrayOf, shape } from "prop-types";
import ls from "local-storage";
// import Task from "./Task";
import TaskHOC from "./Task.container";

const allTasksPropTypes = {
	allTasks: arrayOf(
		shape({
			title: string.isRequired,
			description: string.isRequired,
			startTime: string.isRequired,
			endTime: string.isRequired
		})
	)
};

// const modifyPropsNames = data => {
// 	const arrayTemp = [];

// 	data.forEach(c => {
// 		const { id, firstName, lastName, phoneNumber, mail } = c;
// 		arrayTemp.push({
// 			id,
// 			firstname: firstName,
// 			lastname: lastName,
// 			phone: phoneNumber,
// 			email: mail
// 		});
// 	});
// 	return arrayTemp;
// };

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
			},
			{
				id: 3,
				title: "Toto tutu",
				description: "Lorem Ipsum",
				startTime: "12/05",
				endTime: "20/05"
			}
		];

		ls.clear();
		ls.set("tasks", tasksToStore);

		var tasks = ls.get("tasks") || null;
		this.setState({ isLoaded: true, tasks: tasks });
	}

	render() {
		const { error, isLoaded, tasks } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else if (tasks == null) {
			return <p>Aucune tache existante</p>;
		} else {
			return (
				<div className="AllTasks">
					{tasks.map(task => (
						<React.Fragment>
							{/* <Task
								id={task.id}
								title={task.title}
								description={task.description}
								startTime={task.startTime}
								endTime={task.endTime}
							/> */}
							<TaskHOC {...task} />
							<br />
						</React.Fragment>
					))}
				</div>
			);
		}
	}
}

//AllTasks.propTypes = allTasksPropTypes;

export default AllTasks;
