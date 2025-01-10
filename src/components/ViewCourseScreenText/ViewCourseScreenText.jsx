import css from './ViewCourseScreenText.module.css';

export default function ViewCourseScreenText({ currentInfo }) {
  return (
    <ul className={css.viewCourseScreenList}>
      {currentInfo.viewCourseScreenText.map((text, index) => (
        <li key={index} className={css.viewCourseScreenItem}>
          <img src={currentInfo.viewCourseScreenIcons[index]} alt={`icon-${index}`} />
          <h5>{text}</h5>
        </li>
      ))}
    </ul>
  );
}
