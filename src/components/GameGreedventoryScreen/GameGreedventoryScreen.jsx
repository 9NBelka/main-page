import { useState } from 'react';
import css from './GameGreedventoryScreen.module.css';
import clsx from 'clsx';

export default function GameGreedventoryScreen({ currentInfo }) {
  const greedInfo = currentInfo.fourGamesScreenGreedventory;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageLink) => {
    setModalImage(imageLink);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage('');
    setIsModalOpen(false);
  };

  return (
    <div className={css.gameGreedventoryScreen}>
      <h6 className={css.gamesScreenGeneralTextMarker}>{currentInfo.fourGamesScreenGeneralText}</h6>
      {greedInfo ? (
        <div className={css.gameGreedventoryScreenImageAndText}>
          <img
            className={css.gameGreedventoryScreenImage}
            src={greedInfo.imageGame}
            alt={greedInfo.nameGame}
          />
          <div className={css.gameGreedventoryScreenTexts}>
            <h4 className={css.nameGame}>{greedInfo.nameGame}</h4>
            <h6 className={css.gameText}>{greedInfo.shortDescription}</h6>

            <div className={css.gameGreedventoryScreenLinks}>
              {greedInfo.linksGame.includes('Steam') && (
                <a href={greedInfo.linkOnGameSteam} target='_blank' rel='noopener noreferrer'>
                  <h6 className={css.gameText}>Steam,</h6>
                </a>
              )}
              {greedInfo.linksGame.includes('GOG') && (
                <a href={greedInfo.linkOnGameGog} target='_blank' rel='noopener noreferrer'>
                  <h6 className={css.gameText}>GOG</h6>
                </a>
              )}
            </div>
            <h6 className={css.gameText}>{greedInfo.studioGame}</h6>
            <h6 className={css.gameText}>{greedInfo.descriptionGame}</h6>

            <h6
              className={clsx(css.gameText, css.gameTextLink)}
              onClick={() => openModal(greedInfo.bestInnovationLink)}>
              {greedInfo.bestInnovation}
            </h6>
            <h6
              className={clsx(css.gameText, css.gameTextLink)}
              onClick={() => openModal(greedInfo.bestGameOfTheShowLink)}>
              {greedInfo.bestGameOfTheShow}
            </h6>
            {/* Modal for Image */}
            {isModalOpen && (
              <div className={css.modalOverlay} onClick={closeModal}>
                <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
                  <img
                    src={modalImage}
                    alt='Fullscreen Image'
                    className={css.modalImage}
                    onClick={closeModal}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>No info</p>
      )}
    </div>
  );
}
