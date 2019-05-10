import React, { Component } from "react";
import PropTypes from "prop-types";

const taskPropTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	// description: PropTypes.string.isRequired,
	startTime: PropTypes.string.isRequired,
	endTime: PropTypes.string.isRequired
};

class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.id,
			title: props.title,
			description: props.description,
			startTime: props.startTime,
			endTime: props.endTime
		};
	}
	render() {
		return (
			<div className="Task">
				<p>
					Title : {this.state.title}
					<br />
					Description : {this.state.description}
					<br />
					Start time : {this.state.startTime}
					<br />
					End time : {this.state.endTime}
				</p>
			</div>
		);
	}
}

Task.protoTypes = taskPropTypes;

export default Task;
