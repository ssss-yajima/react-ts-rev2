import { Reducer } from 'redux';
import { Task } from '../services/task';
import { TaskListAction, ADD, REMOVE } from '../actions/taskList';

export interface TaskListState {
  tasks: Task[];
}

export const initialState: TaskListState = { tasks: [] };

//タスクを追加
function addTask(tasks: Task[], title: string): Task[] {
  const task = {
    id: 100, // FIXME
    title,
    is_done: false,
  };
  return [...tasks, task];
}
//選択されたタスクを削除
function removeTask(tasks: Task[], task: Task): Task[] {
  return tasks.filter(x => x !== task);
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
    case REMOVE:
      return {
        ...state,
        tasks: removeTask(state.tasks, action.payload.task),
      };
    default: {
      // const _: never = action;
      return state;
    }
  }
};

export default taskListReducer;
