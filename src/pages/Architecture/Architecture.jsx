import PagesHeader from '../../components/PagesHeader/PagesHeader';
import css from './Architecture.module.css';
import srcLogoArch from '../../assets/img/architecture/ArchLogo.png';
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';

export default function Architecture() {
  const endDateTime = 'January 15, 2025 00:00:00';

  return (
    <>
      <div className={css.architectureBackground}>
        <PagesHeader srcLogoArch={srcLogoArch} />
      </div>
      <div>
        <CountdownTimer endDateTime={endDateTime} />
      </div>
    </>
  );
}
