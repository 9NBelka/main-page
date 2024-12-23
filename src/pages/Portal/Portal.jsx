import VerticalSlider from '../../components/VerticalSlider/VerticalSlider';

import PortalHeader from '../../components/PortalHeader/PortalHeader';
import css from './Portal.module.css';

export default function Portal() {
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
            </div>
          </div>
          <VerticalSlider />
        </div>
      </div>

      {/* <VerticalSlider /> */}
    </>
  );
}
