import { compose, withState, withHandlers, mapProps, omit } from "recompose";
import TaskHOC from "./TaskHOC";

const enhancer = compose(
	withState("firstname", "setFirstname", props => props.firstname),
	withHandlers({
		onChange: props => event => {
			props.setFirstname(event.target.value);
		}
	})
	// mapProps(props => ({
	// 	...omit(props, ["firstname", "setFirstname"]),
	// 	value: props.firstname
	// }))
);

export default enhance(TaskHOC);
