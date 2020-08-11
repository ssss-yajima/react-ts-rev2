import React, { FC, useEffect, useState } from 'react';
import TimerComponents from '../components/Timer';

const TimerContainer: FC = () => {
  const LIMIT = 3;
  const [timeLeft, setTimeLeft] = useState(LIMIT);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    setIsRunning(true);
  };
  const stop = () => {
    setIsRunning(false);
  };

  const tick = () => {
    // FIXME fixed time limit
    setTimeLeft(prevTime => (prevTime === 0 ? 0 : prevTime - 1));
  };
  useEffect(() => {
    console.log(timeLeft);
    let timerId: NodeJS.Timer | null = null;
    const clear = () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
    if (isRunning && timeLeft >= 0) {
      timerId = setInterval(tick, 1000);
    } else {
      clear();
      setTimeLeft(LIMIT);
    }

    return () => clear();
  }, [isRunning, timeLeft]);

  return (
    <TimerComponents
      timeLeft={timeLeft}
      start={start}
      stop={stop}
      isRunning={isRunning}
    />
  );
};
export default TimerContainer;
