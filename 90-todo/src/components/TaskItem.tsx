import React, { FC } from 'react';
import { Task } from '../services/task';

export interface TaskProps {
  task: Task;
  onToggle: (taskId: number) => void;
  // toggle?: (taskId: number) => void;
  remove?: (task: Task) => void;
}

const TaskItem: FC<TaskProps> = ({
  task,
  onToggle = () => undefined,
  // toggle = () => undefined,
  remove = () => undefined,
}) => {
  return (
    <div>
      <button type="button" onClick={() => onToggle(task.id)}>
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
