import css from './HeadScreenTitle.module.css';
// import info from '../../allPagesInformation.json';
// import { useLocation } from 'react-router-dom';

export default function HeadScreenTitle({ currentInfo }) {
  return (
    <div className={css.headScreenTitle}>
      {currentInfo ? (
        <div>
          <h4 className={css.categoryCourses}>{currentInfo.categoryCourse}</h4>
          <h1 className={css.nameCourse}>{currentInfo.nameCourse}</h1>
          <h2 className={css.subNameCourse}>{currentInfo.subNameCourse}</h2>
          <h5 className={css.descriptionCourse}>{currentInfo.descriptionCourse}</h5>
          <h5 className={css.notification}>{currentInfo.notificationCourse}</h5>
        </div>
      ) : (
        <div>Информация для текущего пути не найдена</div>
      )}
    </div>
  );
}
