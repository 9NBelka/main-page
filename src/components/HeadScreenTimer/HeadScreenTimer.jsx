import CountdownTimer from '../CountdownTimer/CountdownTimer';
import css from './HeadScreenTimer.module.css';

export default function HeadScreenTimer() {
  const endDateTime = 'January 11, 2025 00:00:00';
  return (
    <div className={css.countdownAndAnswerBlocks}>
      <div className={css.countdownTimerBlockWithTitle}>
        <h5 className={css.countdownTimerTitle}>christmas sale заканчивается ЧЕРЕЗ:</h5>
        <CountdownTimer endDateTime={endDateTime} />
      </div>
      <div className={css.answerBlock}>
        <h5 className={css.answerBlockTitle}>задайте вопрос спикерам</h5>
        <img
          className={css.answerBlockImage}
          src='https://lms.k-syndicate.school/wp-content/uploads/2022/09/telegram-icon-new.png'
        />
      </div>
    </div>
  );
}
