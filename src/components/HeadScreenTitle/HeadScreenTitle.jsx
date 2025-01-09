import css from './HeadScreenTitle.module.css';

export default function HeadScreenTitle() {
  return (
    <div className={css.headScreenTitle}>
      <h4 className={css.categoryCourses}>Course</h4>
      <h1 className={css.nameCourse}>ARCHITECTURE UNITY GAMES</h1>
      <h5 className={css.descriptionCourse}>
        Курс для того, кто имеет базовый навык в разработке, знания C# и хочет углубить свои
        представления об архитектуре игр в индустриальных подходах, да и вообще – о том, как эти
        игры делать.
      </h5>
      <h5 className={css.notification}>16 поток стартовал 2 декабря</h5>
    </div>
  );
}
