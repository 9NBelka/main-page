import clsx from 'clsx';
import css from './SpeakersScreenGeneralInformation.module.css';

export default function SpeakersScreenGeneralInformation({ generalInfo }) {
  return (
    <div className={css.speakersScreenGeneral}>
      {generalInfo.speakerScreenGeneralInformation.map((info, index) => (
        <div key={index} className={css.speakersScreenGeneralBlock}>
          <p>{info.generalInfo}</p>

          <h5 className={css.speakersScreenGeneralListTitle}>{info.generalInfoListTitle}</h5>

          <ul className={css.speakersScreenGeneralList}>
            {info.generalInfoList.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.beforeLinkText}{' '}
                <a
                  href={info.generalInfoListLinks[itemIndex]}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={clsx(
                    css.generalInfoLink,
                    generalInfo.id == 1 ? css.generalInfoLinkTeamLead : css.generalInfoLink,
                  )}>
                  {item.linkText}
                </a>
                {item.afterLinkText}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
