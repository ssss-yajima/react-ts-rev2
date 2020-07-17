import React, { FC } from 'react';
import { Task } from '../services/task';

export interface TaskProps {
  task?: Task;
  finish?: () => void;
  remove?: () => void;
}

const TaskItem: FC<TaskProps> = ({
  task = null,
  finish = () => undefined,
  remove = () => undefined,
}) => {
  return (
    <div className="TaskItem">
      <button onClick={finish}>Done</button>
      task.title
      <button onClick={remove}>Delete</button>
    </div>
  );
};

export default TaskItem;
