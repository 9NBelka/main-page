import { useState } from 'react';
import css from './GameFourScreen.module.css';
import clsx from 'clsx';
import GameGreedventoryScreen from '../GameGreedventoryScreen/GameGreedventoryScreen';

export default function GameFourScreen({ currentInfo }) {
  return (
    <div className={css.gameBlockMain}>
      <div className={css.gameBlocks}>
        {currentInfo.fourGamesScreen.map((gamesInfo, index) => (
          <GameBlock key={index} gamesInfo={gamesInfo} />
        ))}
      </div>
      <GameGreedventoryScreen currentInfo={currentInfo} />
    </div>
  );
}

function GameBlock({ gamesInfo }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const getDescriptionWithLinks = (description) => {
    return description
      .replace(
        /\biOS\b/g,
        `<a href="${gamesInfo.linkOnGameIos}" target="_blank" rel="noopener noreferrer">iOS</a>`,
      )
      .replace(
        /\bAndroid\b/g,
        `<a href="${gamesInfo.linkOnGameGoogle}" target="_blank" rel="noopener noreferrer">Android</a>`,
      );
  };

  return (
    <div className={css.gameBlock}>
      <img src={gamesInfo.imageGame} alt={gamesInfo.nameGame} />
      <h5 className={css.nameGame}>{gamesInfo.nameGame}</h5>
      <h6
        className={css.descriptionGame}
        dangerouslySetInnerHTML={{
          __html: getDescriptionWithLinks(gamesInfo.shortDescription),
        }}></h6>
      <button className={css.toggleButton} onClick={toggleDescription}>
        {isExpanded ? 'Скрыть' : 'Технически интересны:'}
      </button>
      <div className={`${css.expandedText} ${isExpanded ? css.show : ''}`}>
        {gamesInfo.descriptionGame && gamesInfo.descriptionGame.length > 0 ? (
          gamesInfo.descriptionGame.map((description, index) => (
            <p key={index} className={clsx(css.descriptionGame, css.descriptionMarg)}>
              {description}
            </p>
          ))
        ) : (
          <p className={css.descriptionGame}>Нет дополнительного описания.</p>
        )}
      </div>
    </div>
  );
}
