import { useState, useEffect, useCallback } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ endDateTime }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(endDateTime) - new Date();
    let time = {};
    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return time;
  }, [endDateTime]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div className='time-box' key={interval}>
      <span className='time-value'>{timeLeft[interval] || '0'}</span>
      <span className='time-label'>{interval}</span>
    </div>
  ));

  return (
    <div className='countdown-timer'>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default CountdownTimer;
