import CostScreen from '../../components/CostScreen/CostScreen';
import ForWhomScreenTwoVersion from '../../components/ForWhomScreenTwoVersion/ForWhomScreenTwoVersion';
import GameFourScreen from '../../components/GameFourScreen/GameFourScreen';
import HeadScreen from '../../components/HeadScreen/HeadScreen';
import InsideScreen from '../../components/InsideScreen/InsideScreen';
import PagesHeader from '../../components/PagesHeader/PagesHeader';
import ReviewScreen from '../../components/ReviewScreen/ReviewScreen';
import SpeakersScreen from '../../components/SpeakersScreen/SpeakersScreen';
import ViewCourseScreen from '../../components/ViewCourseScreen/ViewCourseScreen';

import reviewsTeamLead from '../../review-jsons/review-teamlead.json';
import css from './TeamLead.module.css';

export default function TeamLead({ currentInfo, currentInfoAboutProduct, infoAboutProduct }) {
  return (
    <>
      <div className={css.teamleadBackground}>
        <PagesHeader srcLogo={currentInfo} />
        <div className={css.container}>
          <HeadScreen currentInfo={currentInfo} endDateTime={currentInfo} />
        </div>
      </div>
      <div className={css.teamleadBackgroundViewScreen}>
        <div className={css.container}>
          <ViewCourseScreen currentInfo={currentInfo} />
        </div>
      </div>
      <div className={css.architectureBackgroundForWhom}>
        <h3 className={css.titleScreenText}>Для кого?</h3>
        <div className={css.container}>
          <ForWhomScreenTwoVersion currentInfo={currentInfo} />
        </div>
      </div>
      <div className={css.titleScreen}>
        <h3 className={css.titleScreenText}>кто?</h3>
      </div>
      <div className={css.teamleadBackgroundSpeakers}>
        <SpeakersScreen currentInfo={currentInfo} />
      </div>
      <div className={css.teamleadBackgroundReview}>
        <h3 className={css.titleScreenText}>ОТЗЫВЫ</h3>
        <div className={css.container}>
          <ReviewScreen reviews={reviewsTeamLead} currentInfo={currentInfo} />
        </div>
      </div>
      <div className={css.titleScreen}>
        <h3 className={css.titleScreenText}>мы работали над:</h3>
      </div>
      <div className={css.teamleadBackgroundGames}>
        <div className={css.container}>
          <GameFourScreen currentInfo={currentInfo} />
        </div>
      </div>
      <div className={css.teamleadBackgroundWhatInside}>
        <h3 className={css.titleScreenText}>что внутри?</h3>
        <div className={css.container}>
          <InsideScreen currentInfo={currentInfo} />
        </div>
      </div>
      <div className={css.container}>
        <CostScreen
          currentInfoAboutProduct={currentInfoAboutProduct}
          infoAboutProduct={infoAboutProduct}
        />
      </div>
    </>
  );
}
