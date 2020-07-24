import React, { FC } from 'react';
import { Task } from '../services/task';

export interface TaskProps {
  task: Task;
  finish?: () => void;
  remove?: (task: Task) => void;
}

const TaskItem: FC<TaskProps> = ({
  task,
  finish = () => undefined,
  remove = (task: Task) => undefined,
}) => {
  return (
    <div className="TaskItem">
      {/* <button onClick={finish}>Done</button> */}
      {task.title}
      <input type="button" value="Remove" onClick={() => remove(task)} />
    </div>
  );
};

export default TaskItem;
