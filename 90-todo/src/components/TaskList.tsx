import React, { FC, useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import { Container, Grid } from '@material-ui/core';
import TaskItem from './TaskItem';
import { Task } from '../services/task';
import { fetchTasks } from '../services/api';

export interface TaskListProps {
  tasks?: Task[];
  add?: (task: Task) => void;
  set?: (tasks: Task[]) => void;
  remove?: (task: Task) => void;
  toggle?: (task: Task) => void;
}

const TaskList: FC<TaskListProps> = ({
  tasks = [],
  add = () => undefined,
  set = () => undefined,
  remove = () => undefined,
  toggle = () => undefined,
}) => {
  // State
  const [title, setTitle] = useState('');
  const [selectedId, setSelectedId] = useState('');

  // Add a new task
  const onClickAdd = () => {
    const newTask: Task = {
      id: new Date().getTime().toString(), // FIXME
      title,
      isDone: false,
    };
    add(newTask);
    setTitle(''); // Clear input box
  };

  // Lifecycle
  useEffect(() => {
    // Fetch tasks from API on mount
    // fetchTasks().then(fetchedTasks => set(fetchedTasks));
  }, [set]);

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
      <div
        className="NewTaskForm"
        style={{ paddingLeft: 10, paddingRight: 10 }}
      >
        <Grid container spacing={1}>
          <Grid item sm={10}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              fullWidth
              label="タスク名を入力..."
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item sm={2}>
            <Button
              variant="contained"
              onClick={onClickAdd}
              fullWidth
              disabled={!title}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TaskList;
