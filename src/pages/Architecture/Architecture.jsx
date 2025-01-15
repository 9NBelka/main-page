import ForWhomScreen from '../../components/ForWhomScreen/ForWhomScreen';
import HeadScreen from '../../components/HeadScreen/HeadScreen';
import PagesHeader from '../../components/PagesHeader/PagesHeader';
import ReviewScreen from '../../components/ReviewScreen/ReviewScreen';
import SpeakersScreen from '../../components/SpeakersScreen/SpeakersScreen';
import ViewCourseScreen from '../../components/ViewCourseScreen/ViewCourseScreen';

import reviewsArchi from '../../review-jsons/review-architecture.json';
import css from './Architecture.module.css';

export default function Architecture({ currentInfo }) {
  return (
    <>
      <div className={css.architectureBackground}>
        <PagesHeader srcLogo={currentInfo} />
        <div className={css.container}>
          <HeadScreen currentInfo={currentInfo} endDateTime={currentInfo} />
        </div>
      </div>
      <div className={css.architectureBackgroundViewScreen}>
        <div className={css.container}>
          {/*  */}
          <ViewCourseScreen currentInfo={currentInfo} />
        </div>
      </div>
      <div className={css.architectureBackgroundForWhom}>
        <h3 className={css.titleScreenText}>Для кого?</h3>
        <div className={css.container}>
          <ForWhomScreen currentInfo={currentInfo} />
        </div>
      </div>
      <div className={css.titleScreen}>
        <h3 className={css.titleScreenText}>кто?</h3>
      </div>
      <div className={css.architectureBackgroundSpeakers}>
        <SpeakersScreen currentInfo={currentInfo} />
      </div>
      <div className={css.architectureBackgroundReview}>
        <h3 className={css.titleScreenText}>ОТЗЫВЫ</h3>
        <div className={css.container}>
          <ReviewScreen reviews={reviewsArchi} currentInfo={currentInfo} />
        </div>
      </div>
    </>
  );
}
