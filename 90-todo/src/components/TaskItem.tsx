import React, { FC } from 'react';
import { Task } from '../services/task';

export interface TaskProps {
  task: Task;
  onClickToggle: (task: Task) => void;
  onClickRemove?: (task: Task) => void;
}

const TaskItem: FC<TaskProps> = ({
  task,
  onClickToggle = () => undefined,
  onClickRemove = () => undefined,
}) => {
  return (
    <div>
      <button type="button" onClick={() => onClickToggle(task)}>
        Done
      </button>
      {task.isDone ? '■' : '□'}
      {task.title}
      <button type="button" onClick={() => onClickRemove(task)}>
        Remove
      </button>
    </div>
  );
};

export default TaskItem;
