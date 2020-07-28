import { Task } from '../services/task';

export const ADD = 'TASKLIST/ADD';
export const SET = 'TASKLIST/SET';
export const REMOVE = 'TASKLIST/REMOVE';
export const TOGGLE = 'TASKLIST/TOGGLE';

// Add a new task
export const add = (task: Task) => ({
  type: ADD as typeof ADD,
  payload: { task },
});

// Set taks
export const set = (tasks: Task[]) => ({
  type: SET as typeof SET,
  payload: { tasks },
});

// Delete a task
export const remove = (task: Task) => ({
  type: REMOVE as typeof REMOVE,
  payload: { task },
});
// Toggle tasks isDone status
export const toggle = (task: Task) => ({
  type: TOGGLE as typeof TOGGLE,
  payload: { task },
});

export type TaskListAction =
  | ReturnType<typeof add>
  | ReturnType<typeof remove>
  | ReturnType<typeof toggle>
  | ReturnType<typeof set>;
