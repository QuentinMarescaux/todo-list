import { compose, withState, withHandlers, mapProps, omit } from "recompose";
import TaskHOC from "./TaskHOC";

const enhance = compose(
	withState("description", "setDescription", props => props.description),
	withHandlers({
		onChange: props => event => {
			props.setDescription(event.target.value);
		}
	})
);

export default enhance(TaskHOC);
