import React, { FC, useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export interface TimerProps {
  isRunning?: boolean;
  timeLeft?: number;
  start?: () => void;
  stop?: () => void;
}

const DEFAULT_TIME = 5;

const TimerComponents: FC<TimerProps> = ({
  isRunning = false,
  timeLeft = DEFAULT_TIME,
  start,
  stop,
}) => {
  // State

  const startButton = (
    <Button variant="contained" onClick={start}>
      Start
    </Button>
  );

  const stopButton = (
    <Button variant="contained" onClick={stop}>
      Stop
    </Button>
  );

  return (
    <>
      <h2>Timer</h2>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        value={timeLeft}
      />
      {isRunning ? stopButton : startButton}
    </>
  );
};

export default TimerComponents;
