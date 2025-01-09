import { useState, useEffect, useCallback } from 'react';
import css from './CountdownTimer.module.css';

const CountdownTimer = ({ endDateTime }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(endDateTime) - new Date();
    let time = {};
    if (difference > 0) {
      time = {
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    } else {
      time = { day: 0, hour: 0, min: 0, sec: 0 }; // Все значения равны нулю после окончания таймера
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

  // Функция для добавления ведущих нулей
  const formatWithLeadingZero = (number) => String(number).padStart(2, '0');

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div className={css.countdownTimerBlock} key={interval}>
      <span className={css.countdownTimerValue}>
        {formatWithLeadingZero(timeLeft[interval] || 0)}
      </span>
      <span className={css.countdownTimerLabel}>{interval}</span>
    </div>
  ));

  return (
    <div className={css.countdownTimer}>
      {timerComponents.length ? timerComponents : <span>00:00:00:00</span>}
    </div>
  );
};

export default CountdownTimer;
