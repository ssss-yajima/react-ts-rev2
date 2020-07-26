import { Reducer } from 'redux';
import { Task } from '../services/task';
import { TaskListAction, ADD, REMOVE, TOGGLE } from '../actions/taskList';

export interface TaskListState {
  tasks: Task[];
}
export const initialState: TaskListState = { tasks: [] };

// 選択されたタスクを削除
const remove = (tasks: Task[], task: Task): Task[] =>
  tasks.filter(x => x !== task);

// 選択されたタスクの完了状態を反転
function toggle(tasks: Task[], task: Task): Task[] {
  const toggledTask = task;
  toggledTask.isDone = !toggledTask.isDone;
  const newTasks = tasks.map(x => (x.id === task.id ? toggledTask : x));

  return newTasks;
}

const taskListReducer: Reducer<TaskListState, TaskListAction> = (
  state: TaskListState = initialState,
  action: TaskListAction,
): TaskListState => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      };
    case REMOVE:
      return {
        ...state,
        tasks: remove(state.tasks, action.payload.task),
      };
    case TOGGLE:
      return {
        ...state,
        tasks: toggle(state.tasks, action.payload.task),
      };
    default: {
      // const _: never = action;
      return state;
    }
  }
};

export default taskListReducer;
