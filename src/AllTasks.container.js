import {
	compose,
	withState,
	withHandlers,
	lifecycle,
	mapProps,
	omit
} from "recompose";
import AllTasksHOC from "./AllTasksHOC";
import ls from "local-storage";

const enhance = compose(
	lifecycle({
		componentDidMount() {
			var tasks = ls.get("tasks") || "";
			this.setState({ isLoaded: true, tasks: tasks });
		}
	})
);

export default enhance(AllTasksHOC);
