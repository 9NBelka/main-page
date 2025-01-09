import HeadScreen from '../../components/HeadScreen/HeadScreen';
import PagesHeader from '../../components/PagesHeader/PagesHeader';
import css from './TeamLead.module.css';

export default function TeamLead({ currentInfo }) {
  return (
    <>
      <div className={css.architectureBackground}>
        <PagesHeader srcLogo={currentInfo} />
        <div className={css.container}>
          <HeadScreen currentInfo={currentInfo} endDateTime={currentInfo} />
        </div>
      </div>
    </>
  );
}
