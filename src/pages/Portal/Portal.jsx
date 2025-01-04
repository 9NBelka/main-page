import VerticalSlider from '../../components/VerticalSlider/VerticalSlider';

import PortalHeader from '../../components/PortalHeader/PortalHeader';
import css from './Portal.module.css';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Portal() {
  const [move, setMove] = useState({ x: 0, y: 0 });
  const [moveSmall, setMoveSmall] = useState({ x: 0, y: 0 });
  const [moveNegative, setMoveNegative] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Смещение рассчитывается на основе центра окна
      const moveX = ((windowWidth / 2 - clientX) / windowWidth) * 4;
      const moveY = ((windowHeight / 2 - clientY) / windowHeight) * 4;

      const moveSmallX = ((windowWidth / 2 - clientX) / windowWidth) * 2;
      const moveSmallY = ((windowHeight / 2 - clientY) / windowHeight) * 2;

      const moveNegX = moveX * -1;
      const moveNegY = moveY * -1;

      setMove({ x: moveX, y: moveY });
      setMoveSmall({ x: moveSmallX, y: moveSmallY });
      setMoveNegative({ x: moveNegX, y: moveNegY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className={css.portalBackground}>
        <PortalHeader />
        <div className={css.portalImageAndSlider}>
          <div className={css.portalImagesPortal}>
            <div>
              <img
                className={css.portalImagePortal}
                src='/src/assets/img/portal/backfround-portal-new-portal.webp'
              />
              <img
                className={clsx(css.portalImageRocksOne)}
                src='/src/assets/img/portal/stones-back-portal-new-size.webp'
                style={{
                  transform: `translate(${moveNegative.x}px, ${moveNegative.y}px)`,
                }}
              />
              <img
                className={css.portalImageRocksTwo}
                src='/src/assets/img/portal/stones-up-portal-new-size.webp'
                style={{
                  transform: `translate(${moveSmall.x}px, ${moveSmall.y}px)`,
                }}
              />
              <img
                className={css.portalImageCosmonaft}
                src='/src/assets/img/portal/cosmonaft-portal-new-size-two.webp'
                style={{
                  transform: `translate(${move.x}px, ${move.y}px)`,
                }}
              />
            </div>
          </div>
          <VerticalSlider />
        </div>
      </div>
    </>
  );
}
