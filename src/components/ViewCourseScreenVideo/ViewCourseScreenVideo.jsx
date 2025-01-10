import clsx from 'clsx';
import css from './ViewCourseScreenVideo.module.css';

export default function ViewCourseScreenVideo({ currentInfo }) {
  return (
    <>
      <div
        className={clsx(
          currentInfo.viewCourseScreenVideos.length < 2
            ? css.viewCourseScreenVideoOne
            : css.viewCourseScreenVideo,
        )}>
        {currentInfo.viewCourseScreenVideos.map((video, index) => (
          <iframe key={index} src={video} className={css.viewCourseScreenVideoIframe}></iframe>
        ))}
      </div>
    </>
  );
}
