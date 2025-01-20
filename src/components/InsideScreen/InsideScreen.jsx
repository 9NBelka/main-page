import { useState } from 'react';
import css from './InsideScreen.module.css';

import { BsFillPlusSquareFill, BsFillDashSquareFill } from 'react-icons/bs';
import clsx from 'clsx';

export default function InsideScreen({ currentInfo }) {
  const [activeIndexColumn1, setActiveIndexColumn1] = useState(null);
  const [activeIndexColumn2, setActiveIndexColumn2] = useState(null);

  const toggleSpoiler = (column, index) => {
    if (column === 1) {
      setActiveIndexColumn2(null);
      setActiveIndexColumn1(activeIndexColumn1 === index ? null : index);
    } else if (column === 2) {
      setActiveIndexColumn1(null);
      setActiveIndexColumn2(activeIndexColumn2 === index ? null : index);
    }
  };

  const countSymbolInTitle = 50;

  return (
    <div className={css.insideScreenBlockMain}>
      <div className={css.insideScreenBlockColumn}>
        {currentInfo.insideScreen.map((info, index) => (
          <div
            key={index}
            className={clsx(
              css.insideScreenBlock,
              info.insideScreenTitle.length > countSymbolInTitle && css.longTitle,
            )}
            style={{ backgroundImage: `url(${info.insideScreenBackImage})` }}>
            <div className={css.insideScreenHeaderTitle} onClick={() => toggleSpoiler(1, index)}>
              <h3 className={css.insideScreenTitle}>{info.insideScreenTitle}</h3>
              <span>
                {activeIndexColumn1 === index ? (
                  <BsFillDashSquareFill className={css.insideScreenIcon} />
                ) : (
                  <BsFillPlusSquareFill className={css.insideScreenIcon} />
                )}
              </span>
            </div>
            <div
              className={`${css.insideScreenContent} ${
                activeIndexColumn1 === index ? css.open : css.closed
              }`}>
              <h5 className={css.insideScreenContentText}>{info.insideScreenContent}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className={css.insideScreenBlockColumn}>
        {currentInfo.insideScreenTwo.map((info, index) => (
          <div
            key={index}
            className={clsx(
              css.insideScreenBlock,
              info.insideScreenTitle.length > countSymbolInTitle && css.longTitle,
            )}
            style={{ backgroundImage: `url(${info.insideScreenBackImage})` }}>
            <div className={css.insideScreenHeaderTitle} onClick={() => toggleSpoiler(2, index)}>
              <h3 className={css.insideScreenTitle}>{info.insideScreenTitle}</h3>
              <span>
                {activeIndexColumn2 === index ? (
                  <BsFillDashSquareFill className={css.insideScreenIcon} />
                ) : (
                  <BsFillPlusSquareFill className={css.insideScreenIcon} />
                )}
              </span>
            </div>
            <div
              className={`${css.insideScreenContent} ${
                activeIndexColumn2 === index ? css.open : css.closed
              }`}>
              <h5 className={css.insideScreenContentText}>{info.insideScreenContent}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
