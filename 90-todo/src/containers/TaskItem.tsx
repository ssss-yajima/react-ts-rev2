import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Task } from '../services/task';
import TaskItem from '../components/TaskItem';
import { remove, toggle } from '../actions/taskList';

interface DispatchProps {
  toggle: (taskId: number) => void;
  remove: (task: Task) => void;
}

const mapStateToProps = undefined;

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  toggle: taskId => dispatch(toggle(taskId)),
  remove: task => dispatch(remove(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
