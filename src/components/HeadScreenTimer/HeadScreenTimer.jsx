import clsx from 'clsx';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import css from './HeadScreenTimer.module.css';
import { BsTelegram } from 'react-icons/bs';

export default function HeadScreenTimer({ styles, endDateTime }) {
  return (
    <div
      className={clsx(
        endDateTime.endDateTime ? css.countdownAndAnswerBlocks : css.countdownAndAnswerBlocksOff,
      )}>
      <div
        className={clsx(
          css.countdownTimerBlockWithTitle,
          styles.id == 1
            ? css.countdownTimerBlockWithTitleTeamLead
            : css.countdownTimerBlockWithTitle,
        )}>
        <h5 className={css.countdownTimerTitle}>christmas sale заканчивается ЧЕРЕЗ:</h5>
        <CountdownTimer endDateTime={endDateTime} color={styles} />
      </div>
      <div
        className={clsx(
          css.answerBlock,
          styles.id == 1 ? css.answerBlockTeamLead : css.answerBlock,
        )}>
        <h5
          className={clsx(
            css.answerBlockTitle,
            styles.id == 1 ? css.answerBlockTitleTeamLead : css.answerBlockTitle,
          )}>
          задайте вопрос спикерам
        </h5>
        <BsTelegram
          className={clsx(
            css.answerBlockIcons,
            styles.id == 1 ? css.answerBlockIconsTeamLead : css.answerBlockIcons,
          )}
        />
      </div>
    </div>
  );
}
