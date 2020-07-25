import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import TaskList from '../components/TaskList';
import { TaskListState } from '../reducers/taskList';
import { Task } from '../services/task';
import { add, toggle, remove } from '../actions/taskList';

interface StateProps {
  tasks: Task[];
}

interface DispatchProps {
  add: (title: string) => void;
  remove: (task: Task) => void;
  toggle: (task: Task) => void;
}

const mapStateToProps = (state: TaskListState): StateProps => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: title => dispatch(add(title)),
  remove: task => dispatch(remove(task)),
  toggle: task => dispatch(toggle(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
