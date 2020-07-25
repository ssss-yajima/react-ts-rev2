import { Reducer } from 'redux';
import { Task } from '../services/task';
import { TaskListAction, ADD, REMOVE, TOGGLE } from '../actions/taskList';

export interface TaskListState {
  tasks: Task[];
}
export const initialState: TaskListState = { tasks: [] };

// タスクを追加
const taskOf = (title: string) => ({
  id: new Date().getTime(), // FIXME
  title,
  isDone: false,
});

// 選択されたタスクを削除
const remove = (tasks: Task[], task: Task): Task[] =>
  tasks.filter(x => x !== task);
// 選択されたタスクの完了状態を反転
function toggle(task: Task): Task {
  const toggledTask = task;
  toggledTask.isDone = !task.isDone;

  return toggledTask;
}

const taskListReducer: Reducer<TaskListState, TaskListAction> = (
  state: TaskListState = initialState,
  action: TaskListAction,
): TaskListState => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        tasks: [...state.tasks, taskOf(action.payload.title)],
      };
    case REMOVE:
      return {
        ...state,
        tasks: remove(state.tasks, action.payload.task),
      };
    case TOGGLE:
      return {
        ...state,
        tasks: state.tasks.map(x =>
          x.id === action.payload.taskId ? toggle(x) : x,
        ),
      };
    default: {
      // const _: never = action;
      return state;
    }
  }
};

export default taskListReducer;
