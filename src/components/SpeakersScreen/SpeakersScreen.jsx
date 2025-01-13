import clsx from 'clsx';
import css from './SpeakersScreen.module.css';
import SpeakersScreenGeneralInformation from '../SpeakersScreenGeneralInformation/SpeakersScreenGeneralInformation';

export default function SpeakersScreen({ currentInfo }) {
  return (
    <div className={css.speakersScreenPosition}>
      <div className={css.speakerScreenTopShadow}></div>
      <div className={css.container}>
        <div className={css.speakersScreen}>
          {currentInfo.speakerScreen.map((speaker, index) => (
            <div key={index} className={css.speakerItem}>
              {/* Картинка спикера */}
              <img
                src={speaker.imageSpeaker}
                alt={speaker.nameSpeaker}
                className={css.speakerImage}
              />
              {/* Текст поверх картинки */}
              <div className={css.speakerInfo}>
                <ul className={css.speakerList}>
                  <li className={css.speakerName}>{speaker.nameSpeaker}</li>
                  <li className={css.speakerDescription}>
                    {speaker.descriptionSpeaker.split('\n').map((line, idx) => (
                      <span key={idx} className={css.speakerDescriptionLine}>
                        {line}
                      </span>
                    ))}
                  </li>
                  <li className={css.speakerListlinkedInButton}>
                    <a
                      href={speaker.linkedInSpeaker}
                      target='_blank'
                      className={clsx(
                        css.linkedInButton,
                        currentInfo.id == 1 ? css.linkedInButtonTeamLead : css.linkedInButton,
                      )}>
                      <img src='https://lms.k-syndicate.school/wp-content/uploads/2024/02/linkedIn-esc.png' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <SpeakersScreenGeneralInformation generalInfo={currentInfo} />
      </div>
      <div className={css.speakerScreenBottomShadow}></div>
    </div>
  );
}
