import PagesHeader from '../../components/PagesHeader/PagesHeader';
import css from './Architecture.module.css';
import srcLogoArch from '../../assets/img/architecture/ArchLogo.png';
import HeadScreenTitle from '../../components/HeadScreenTitle/HeadScreenTitle';
import HeadScreenTimer from '../../components/HeadScreenTimer/HeadScreenTimer';

export default function Architecture() {
  return (
    <>
      <div className={css.architectureBackground}>
        <PagesHeader srcLogoArch={srcLogoArch} />
        <div className={css.container}>
          <HeadScreenTitle />
          <HeadScreenTimer />
        </div>
      </div>
    </>
  );
}
