import { useState } from 'react';
import css from './ReviewScreen.module.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import clsx from 'clsx';

export default function ReviewScreen({ reviews, currentInfo }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx((prevIdx) => prevIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx((prevIdx) => prevIdx + 1);
  };

  // Вычисляемые данные
  const isFirstElem = selectedIdx === 0;
  const isLastElem = selectedIdx === reviews.length - 1;
  const visibleArticle = reviews[selectedIdx];
  const current = selectedIdx + 1;
  const total = reviews.length;

  return (
    <div
      className={clsx(
        css.sliderReview,
        currentInfo.id == 1 ? css.sliderReviewTeamLead : css.sliderReview,
      )}>
      <div className={css.sliderReviewNavigation}>
        <p className={css.sliderReviewPagesNumbs}>
          {current <= 9 ? '0' + current : current}/{total <= 9 ? '0' + total : total}
        </p>
        <button
          className={clsx(
            css.sliderReviewNavigationButton,
            currentInfo.id == 1
              ? css.sliderReviewNavigationButtonTeamLead
              : css.sliderReviewNavigationButton,
          )}
          disabled={isFirstElem}
          onClick={handlePrev}>
          <BsArrowLeftShort className={css.sliderReviewNavigationButtonIcon} />
        </button>
        <button
          className={clsx(
            css.sliderReviewNavigationButton,
            currentInfo.id == 1
              ? css.sliderReviewNavigationButtonTeamLead
              : css.sliderReviewNavigationButton,
          )}
          disabled={isLastElem}
          onClick={handleNext}>
          <BsArrowRightShort className={css.sliderReviewNavigationButtonIcon} />
        </button>
      </div>

      <article>
        <h3 className={css.sliderReviewName}>{visibleArticle.studentsName}</h3>
        <div className={css.sliderReviewBlock}>
          <p
            className={clsx(
              css.sliderReviewText,
              currentInfo.id == 1 ? css.sliderReviewTextTeamLead : css.sliderReviewText,
            )}>
            {visibleArticle.studentsFeedback}
          </p>
        </div>
        <p className={css.sliderReviewData}>{visibleArticle.studentsDate}</p>
      </article>
    </div>
  );
}
