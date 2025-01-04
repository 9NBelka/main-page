import clsx from 'clsx';
import css from './PortalHeader.module.css';

import { BsPersonFill, BsCartFill } from 'react-icons/bs';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function PortalHeader() {
  return (
    <header className={css.header}>
      <nav className={css.headerNav}>
        <img
          className={css.headerLogo}
          src='http://portal.k-syndicate.school/img/main/logo-main.png'
        />
        <ul className={css.headerList}>
          <li className={css.headerButton}>
            <h4>Ask a question</h4>
          </li>
          <li>
            <img
              className={css.headerIconFlag}
              src='http://portal.k-syndicate.school/img/main/Flag_UA.jpg'
            />
          </li>
          <li>
            <BsCartFill className={clsx(css.headerIcons, css.headerIconCart)} />
          </li>
          <li>
            <BsPersonFill className={css.headerIcons} />
          </li>
          <li>
            <BurgerMenu />
          </li>
        </ul>
      </nav>
    </header>
  );
}
