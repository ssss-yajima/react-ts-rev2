import { Task } from '../services/task';

export const ADD = 'TASKLIST/ADD';
export const REMOVE = 'TASKLIST/REMOVE';

export const add = (title: string) => ({
  type: ADD as typeof ADD,
  payload: { title },
});

export const remove = (task: Task) => ({
  type: REMOVE as typeof REMOVE,
  payload: { task },
});

export type TaskListAction = ReturnType<typeof add> | ReturnType<typeof remove>;
