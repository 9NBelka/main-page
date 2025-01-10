import ViewCourseScreenText from '../ViewCourseScreenText/ViewCourseScreenText';
import ViewCourseScreenVideo from '../ViewCourseScreenVideo/ViewCourseScreenVideo';

export default function ViewCourseScreen({ currentInfo }) {
  return (
    <>
      <ViewCourseScreenVideo currentInfo={currentInfo} />
      <ViewCourseScreenText currentInfo={currentInfo} />
    </>
  );
}
