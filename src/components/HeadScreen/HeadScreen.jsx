import HeadScreenTimer from '../HeadScreenTimer/HeadScreenTimer';
import HeadScreenTitle from '../HeadScreenTitle/HeadScreenTitle';
import HeadScreenViewCourseText from '../HeadScreenViewCourseText/HeadScreenViewCourseText';

export default function HeadScreen({ currentInfo, endDateTime }) {
  return (
    <>
      <HeadScreenTitle currentInfo={currentInfo} />
      <HeadScreenTimer styles={currentInfo} endDateTime={endDateTime} />
      <HeadScreenViewCourseText />
    </>
  );
}
