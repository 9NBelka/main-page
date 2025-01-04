import clsx from 'clsx';
import css from './PagesHeader.module.css';

import { BsPersonFill, BsCartFill } from 'react-icons/bs';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';

const navMenuTextHeader = [
  {
    id: 1,
    text: 'О чем?',
  },
  {
    id: 2,
    text: 'Для кого?',
  },
  {
    id: 3,
    text: 'Кто?',
  },
  {
    id: 4,
    text: 'Отзывы',
  },
  {
    id: 5,
    text: 'Программа',
  },
  {
    id: 6,
    text: 'Стоимость',
  },
  {
    id: 7,
    text: 'Блог',
  },
];

export default function PagesHeader({ srcLogoArch }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={clsx(css.header, `${isScrolled ? 'scrolled' : ''}`)}>
      <nav className={css.headerNav}>
        <img className={css.headerLogo} src={srcLogoArch} />
        <ul className={css.headerNavText}>
          {navMenuTextHeader.map((text) => (
            <li key={text.id}>{text.text}</li>
          ))}
        </ul>
        <ul className={css.headerList}>
          {/* <li className={css.headerButton}>
            <h4>Ask a question</h4>
          </li> */}
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
