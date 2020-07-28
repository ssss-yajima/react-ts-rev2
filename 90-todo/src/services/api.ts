import { Task } from './task';

const URL = 'http://localhost:3000/tasks';

export const fetchTasks = async () => {
  let tasks: Task[] = [];
  await fetch(URL)
    .then(res => res.json())
    .then(resJson => {
      tasks = resJson;
    });

  return tasks;
};
