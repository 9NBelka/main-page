import css from './ForWhomScreen.module.css';

export default function ForWhomScreen({ currentInfo }) {
  return (
    <div className={css.forWhomScreen}>
      {currentInfo.forCourseScreen.map((info, index) => (
        <ul key={index} className={css.forWhomScreenList}>
          <img src={info.forCourseScreenImages} className={css.forWhomScreenImage} />
          <li>{info.forCourseScreenTitle}</li>
          <li>{info.forCourseScreenText}</li>
          <li>{info.forCourseScreenTextTwo}</li>
        </ul>
      ))}
    </div>
  );
}
