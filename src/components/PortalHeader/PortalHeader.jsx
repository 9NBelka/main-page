import clsx from 'clsx';
import css from './PortalHeader.module.css';
import { BsList } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import { BsCartFill } from 'react-icons/bs';

export default function PortalHeader() {
  return (
    <>
      <header className={css.header}>
        <nav className={css.headerNav}>
          <img
            className={css.headerLogo}
            src='http://portal.k-syndicate.school/img/main/logo-main.png'
          />
          <ul className={css.headerList}>
            <li>
              <img src='http://portal.k-syndicate.school/img/main/Flag_UA.jpg' />
            </li>
            <li>
              <BsList className={clsx(css.headerIcons, css.headerIconBurger)} />
            </li>
            <li>
              <BsPersonFill className={css.headerIcons} />
            </li>
            <li>
              <BsCartFill className={clsx(css.headerIcons, css.headerIconCart)} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
