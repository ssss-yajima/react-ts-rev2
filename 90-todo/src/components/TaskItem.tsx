import React, { FC } from 'react';

import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid } from '@material-ui/core';
import { Task } from '../services/task';

export interface TaskProps {
  task: Task;
  onClickToggle: (task: Task) => void;
  onClickRemove?: (task: Task) => void;
  onClick: () => void;
  selected: boolean;
}

const TaskItem: FC<TaskProps> = ({
  task,
  onClickToggle = () => undefined,
  onClickRemove = () => undefined,
  onClick = () => undefined,
  selected = false,
}) => {
  return (
    <div>
      <ListItem selected={selected}>
        <ListItemIcon aria-label="toggle" onClick={() => onClickToggle(task)}>
          {task.isDone ? (
            <CheckBoxOutlinedIcon />
          ) : (
            <CheckBoxOutlineBlankOutlinedIcon />
          )}
        </ListItemIcon>
        <ListItemText primary={task.title} onClick={() => onClick()} />

        <ListItemIcon aria-label="delete" onClick={() => onClickRemove(task)}>
          <DeleteIcon />
        </ListItemIcon>
      </ListItem>
    </div>
  );
};

export default TaskItem;
