import CostScreen from '../../components/CostScreen/CostScreen';
import DemoVideosScreen from '../../components/DemoVideosScreen/DemoVideosScreen';
import ForWhomScreen from '../../components/ForWhomScreen/ForWhomScreen';
import GameFourScreen from '../../components/GameFourScreen/GameFourScreen';
import HeadScreen from '../../components/HeadScreen/HeadScreen';
import InsideScreen from '../../components/InsideScreen/InsideScreen';
import PagesHeader from '../../components/PagesHeader/PagesHeader';
import ReviewScreen from '../../components/ReviewScreen/ReviewScreen';
import SpeakersScreen from '../../components/SpeakersScreen/SpeakersScreen';
import ViewCourseScreen from '../../components/ViewCourseScreen/ViewCourseScreen';

import reviewsArchi from '../../review-jsons/review-architecture.json';
import css from './Architecture.module.css';

export default function Architecture({ currentInfo, currentInfoAboutProduct, infoAboutProduct }) {
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
      <div className={css.titleScreen}>
        <h3 className={css.titleScreenText}>мы работали над:</h3>
      </div>
      <div className={css.architectureBackgroundGames}>
        <div className={css.container}>
          <GameFourScreen currentInfo={currentInfo} />
        </div>
      </div>
      <div className={css.architectureBackgroundWhatInside}>
        <h3 className={css.titleScreenText}>что внутри?</h3>
        <div className={css.container}>
          <InsideScreen currentInfo={currentInfo} />
        </div>
      </div>
      <div className={css.architectureBackgroundDemoVideos}>
        <h3 className={css.titleScreenText}>Демо уроков</h3>
        <div className={css.container}>
          <DemoVideosScreen currentInfo={currentInfo} />
        </div>
      </div>
      <div className={css.titleScreen}>
        <h3 className={css.titleScreenText}>Стоимость</h3>
      </div>
      <div className={css.architectureBackgroundCost}>
        <div className={css.container}>
          <CostScreen
            currentInfo={currentInfo}
            currentInfoAboutProduct={currentInfoAboutProduct}
            infoAboutProduct={infoAboutProduct}
          />
        </div>
      </div>
    </>
  );
}
