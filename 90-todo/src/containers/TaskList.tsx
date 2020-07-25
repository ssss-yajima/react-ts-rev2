import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import TaskList from '../components/TaskList';
import { TaskListState } from '../reducers/taskList';
import { Task } from '../services/task';
import { add, toggle } from '../actions/taskList';

interface StateProps {
  tasks: Task[];
}

interface DispatchProps {
  add: (title: string) => void;
  toggle: (taskId: number) => void;
}

const mapStateToProps = (state: TaskListState): StateProps => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: title => dispatch(add(title)),
  toggle: taskId => dispatch(toggle(taskId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
