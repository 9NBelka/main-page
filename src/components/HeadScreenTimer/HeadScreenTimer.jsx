import clsx from 'clsx';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import css from './HeadScreenTimer.module.css';
import { BsTelegram } from 'react-icons/bs';

export default function HeadScreenTimer({ currentInfo, endDateTime }) {
  return (
    <div
      className={clsx(
        endDateTime.endDateTime ? css.countdownAndAnswerBlocks : css.countdownAndAnswerBlocksOff,
      )}>
      <div
        className={clsx(
          css.countdownTimerBlockWithTitle,
          currentInfo.id == 1
            ? css.countdownTimerBlockWithTitleTeamLead
            : css.countdownTimerBlockWithTitle,
        )}>
        <h5 className={css.countdownTimerTitle}>{currentInfo.titleSalesOnTimer}</h5>
        <CountdownTimer endDateTime={endDateTime} color={currentInfo} />
      </div>
      <div
        className={clsx(
          css.answerBlock,
          currentInfo.id == 1 ? css.answerBlockTeamLead : css.answerBlock,
        )}>
        <h5
          className={clsx(
            css.answerBlockTitle,
            currentInfo.id == 1 ? css.answerBlockTitleTeamLead : css.answerBlockTitle,
          )}>
          задайте вопрос спикерам
        </h5>
        <BsTelegram
          className={clsx(
            css.answerBlockIcons,
            currentInfo.id == 1 ? css.answerBlockIconsTeamLead : css.answerBlockIcons,
          )}
        />
      </div>
    </div>
  );
}
