import { Task } from '../services/task';
import { Reducer } from 'redux';
import { TaskListAction, ADD } from '../actions/taskList';

export interface TaskListState {
  tasks: Task[];
}

export const initialState: TaskListState = { tasks: [] };

function addTask(tasks: Task[], title: string): Task[] {
  const task = {
    id: 100, // FIXME
    title: title,
    is_done: false,
  };
  return [...tasks, task];
}

const taskListReducer: Reducer<TaskListState, TaskListAction> = (
  state: TaskListState = initialState,
  action: TaskListAction,
): TaskListState => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        tasks: addTask(state.tasks, action.payload.title),
      };
    default: {
      // const _: never = action;
      return state;
    }
  }
};

export default taskListReducer;
