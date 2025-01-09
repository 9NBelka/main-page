import clsx from 'clsx';
import css from './PagesHeader.module.css';

import { BsPersonFill, BsCartFill } from 'react-icons/bs';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';

export default function PagesHeader({ srcLogo }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    // Проверка скролла при загрузке страницы
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={clsx(css.header, `${isScrolled ? css.headerScrolled : ''}`)}>
      <nav className={css.headerNav}>
        <div className={css.headerLogosAndButtonAnswer}>
          <div>
            <img
              className={clsx(css.headerLogo, srcLogo.id == 1 ? css.headerLogoBig : css.headerLogo)}
              src={srcLogo.logoCourse}
            />
          </div>
          <div>
            <img
              className={css.headerLogoUnity}
              src='https://lms.k-syndicate.school/wp-content/uploads/2022/08/Unity-logo-new.png'
            />
          </div>
          <h5 className={css.headerButtonAnswer}>Задать вопрос</h5>
        </div>
        <ul className={css.headerNavText}>
          <li>
            <a href='#'>О чем?</a>
          </li>

          <li>
            <a href='#'>Для кого?</a>
          </li>

          <li>
            <a href='#'>Кто?</a>
          </li>

          <li>
            <a href='#'>Отзывы</a>
          </li>

          <li>
            <a href='#'>Программа</a>
          </li>

          <li>
            <a href='#'>Стоимость</a>
          </li>

          <li>Блог</li>
        </ul>
        <ul className={css.headerList}>
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
