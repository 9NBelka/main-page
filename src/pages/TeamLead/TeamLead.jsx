import HeadScreen from '../../components/HeadScreen/HeadScreen';
import PagesHeader from '../../components/PagesHeader/PagesHeader';
import SpeakersScreen from '../../components/SpeakersScreen/SpeakersScreen';
import ViewCourseScreen from '../../components/ViewCourseScreen/ViewCourseScreen';
import css from './TeamLead.module.css';

export default function TeamLead({ currentInfo }) {
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
      <div className={css.teamleadBackgroundSpeakers}>
        <SpeakersScreen currentInfo={currentInfo} />
      </div>
    </>
  );
}
