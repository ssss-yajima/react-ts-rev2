import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Task } from '../services/task';
import TaskItem from '../components/TaskItem';
import { remove } from '../actions/taskList';

interface DispatchProps {
  remove: (task: Task) => void;
}

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  remove: task => dispatch(remove(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
