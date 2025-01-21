import css from './DemoVideosScreen.module.css';

export default function DemoVideosScreen({ currentInfo }) {
  return (
    <div className={css.viewCourseScreenVideos}>
      {currentInfo.demoVideos.map((video, index) => (
        <iframe
          key={index}
          src={video}
          className={css.viewCourseScreenVideoIframe}
          allow='autoplay; encrypted-media'
          allowFullScreen></iframe>
      ))}
    </div>
  );
}
