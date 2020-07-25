import React, { FC, useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import TaskItem from './TaskItem';
import { Task } from '../services/task';

export interface TaskListProps {
  tasks?: Task[];
  add?: (title: string) => void;
  remove?: (task: Task) => void;
  toggle?: (task: Task) => void;
}

// 新規タスクTextBox
const useTitle = (): [string, (input: string) => void] => {
  const [title, setTitle] = useState('');
  const set = (input: string) => {
    setTitle(input);
  };

  return [title, set];
};

const TaskList: FC<TaskListProps> = ({
  tasks = [],
  add = () => undefined,
  remove = () => undefined,
  toggle = () => undefined,
}) => {
  const [title, setTitle] = useTitle();
  const [selectedId, setSelectedId] = useState('');
  const onClickAdd = () => {
    add(title);
    setTitle('');
  };

  return (
    <>
      <div className="TaskList">
        <List component="nav" aria-label="taskList">
          {tasks.map(task => (
            <TaskItem
              task={task}
              key={task.id}
              onClickToggle={() => toggle(task)}
              onClickRemove={() => remove(task)}
              onClick={() => setSelectedId(task.id)}
              selected={task.id === selectedId}
            />
          ))}
        </List>
      </div>
      <div className="NewTaskForm">
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          label="タスク名を入力..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <Button variant="contained" onClick={onClickAdd} disabled={!title}>
          Add
        </Button>
      </div>
    </>
  );
};

export default TaskList;
