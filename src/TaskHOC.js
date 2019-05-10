import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const taskPropTypes = {
	user: PropTypes.shape({
		id: PropTypes.string.isRequired,
		firstname: PropTypes.string.isRequired,
		lastname: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired
	}) //.isRequired
};

const TaskHOC = props => {
	const { id, title, description, startTime, endTime, onChange } = props;
	return (
		<div className="Task" data-id={id}>
			<h1>{title}</h1>
			<br />
			{description}
			<br />
			Début : {startTime}
			<br />
			Fin : {endTime}
			<br />
			<input
				type="text"
				name="description"
				value={description}
				onChange={onChange}
			/>
			<IconButton aria-label="Edit">
				<EditIcon />
			</IconButton>
			<IconButton aria-label="Delete">
				<DeleteIcon />
			</IconButton>
		</div>
	);
};

TaskHOC.propTypes = taskPropTypes;

export default TaskHOC;
