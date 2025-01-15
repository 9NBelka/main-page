import clsx from 'clsx';
import css from './ForWhomScreenTwoVersion.module.css';

export default function ForWhomScreenTwoVersion({ currentInfo }) {
  return (
    <div>
      {currentInfo.forCourseScreen.map((info, index) => (
        <div key={index}>
          <h5 className={css.forWhomScreenText}>{info.forCourseScreenTitle}</h5>
          <div className={css.forWhomScreenImageAndList}>
            <img src={info.forCourseScreenImages} />
            <div className={css.forCourseScreenTextAndList}>
              <h5 className={css.forWhomScreenTitle}>{info.forCourseScreenListTitleOne}</h5>
              <h5 className={css.forWhomScreenSubTitle}>{info.forCourseScreenListSubTitle}</h5>
              <ul className={css.forWhomScreenList}>
                {info.forCourseScreenList.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
            </div>
          </div>
          <h5 className={clsx(css.forWhomScreenTitle, css.forWhomScreenTitleMargin)}>
            {info.forCourseScreenListTitleTwo}
          </h5>
          <p className={clsx(css.forCourseScreenText, css.forCourseScreenTextMargin)}>
            {info.forCourseScreenText}
          </p>
          <p className={css.forCourseScreenText}>{info.forCourseScreenTextTwo}</p>
        </div>
      ))}
    </div>
  );
}
