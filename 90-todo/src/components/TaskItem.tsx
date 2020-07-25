import React, { FC } from 'react';
import { Task } from '../services/task';

export interface TaskProps {
  task: Task;
  toggle?: (taskId: number) => void;
  remove?: (task: Task) => void;
}

const TaskItem: FC<TaskProps> = ({
  task,
  toggle = () => undefined,
  remove = () => undefined,
}) => {
  return (
    <div>
      <button type="button" onClick={() => toggle(task.id)}>
        Done
      </button>
      {task.isDone ? ' ' : 'X'}
      {task.title}
      <button type="button" onClick={() => remove(task)}>
        Remove
      </button>
    </div>
  );
};

export default TaskItem;
