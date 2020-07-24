import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import TaskList from '../components/TaskList';
import { TaskListState } from '../reducers/taskList';
import { Task } from '../services/task';
import { add, remove } from '../actions/taskList';

interface StateProps {
  tasks: Task[];
}

interface DispatchProps {
  add: (title: string) => void;
}

const mapStateToProps = (state: TaskListState): StateProps => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: title => dispatch(add(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
