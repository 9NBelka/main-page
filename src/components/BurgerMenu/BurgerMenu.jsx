import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  BsInstagram,
  BsList,
  BsXLg,
  BsController,
  BsCpu,
  BsPlugin,
  BsPeople,
  BsTelegram,
  BsFacebook,
  BsYoutube,
  BsDiscord,
} from 'react-icons/bs';
import css from './BurgerMenu.module.css';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Реф для меню

  const toggleMenu = () => setIsOpen(!isOpen);

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div onClick={toggleMenu} className={css.burgerIcon}>
        {isOpen ? (
          <BsXLg className={clsx(css.headerIconBurger, css.headerIconBurgerClose)} />
        ) : (
          <BsList className={css.headerIconBurger} />
        )}
      </div>
      <div ref={menuRef} className={clsx(css.menu, { [css.open]: isOpen })}>
        <div>
          <img
            className={css.menuLogo}
            src='https://lms.k-syndicate.school/wp-content/uploads/2021/08/LogoB-1.png'
          />
          <h5 className={css.menuListTitle}>Courses</h5>
          <ul className={css.menuList}>
            <li>
              <div className={css.menuListIconSection}>
                <BsController className={css.menuListIcons} />
                <a href='#section1'>Architecture</a>
              </div>
            </li>
            <li>
              <div className={css.menuListIconSection}>
                <BsPeople className={css.menuListIcons} />
                <a href='#section2'>TeamLead</a>
              </div>
            </li>
            <li>
              <div className={css.menuListIconSection}>
                <BsCpu className={css.menuListIcons} />
                <a href='#section3'>UnitTesting</a>
              </div>
            </li>
            <li>
              <div className={css.menuListIconSection}>
                <BsPlugin className={css.menuListIcons} />
                <a href='#section3'>UtilityAI</a>
              </div>
            </li>
            <li>
              <div className={css.menuListIconSection}>
                <BsPlugin className={css.menuListIcons} />
                <a href='#section3'>Addressables</a>
              </div>
            </li>
            <li>
              <div className={css.menuListIconSection}>
                <BsPlugin className={css.menuListIcons} />
                <a href='#section3'>ECS</a>
              </div>
              <h6 className={css.menuListNewCourse}>new</h6>
            </li>
          </ul>
          <h5 className={css.menuListTitle}>social </h5>
          <ul className={css.menuList}>
            <li>
              <div className={css.menuListIconSection}>
                <BsTelegram className={css.menuListIcons} />
                <a href='#section1'>Telegram</a>
              </div>
            </li>
            <li>
              <div className={css.menuListIconSection}>
                <BsInstagram className={css.menuListIcons} />
                <a href='#section2'>Instagram</a>
              </div>
            </li>
            <li>
              <div className={css.menuListIconSection}>
                <BsYoutube className={css.menuListIcons} />
                <a href='#section3'>Youtube</a>
              </div>
            </li>
            <li>
              <div className={css.menuListIconSection}>
                <BsDiscord className={css.menuListIcons} />
                <a href='#section3'>Discord</a>
              </div>
            </li>
            <li>
              <div className={css.menuListIconSection}>
                <BsFacebook className={css.menuListIcons} />
                <a href='#section3'>Facebook</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div className={css.menuListSocialIcons}>
            <BsTelegram className={css.menuListSocialIcon} />
            <BsInstagram className={css.menuListSocialIcon} />
            <BsYoutube className={css.menuListSocialIcon} />
            <BsDiscord className={css.menuListSocialIcon} />
            <BsFacebook className={css.menuListSocialIcon} />
          </div>
          <h5 className={css.menuAuthor}>Authorization</h5>
        </div>
      </div>
    </>
  );
}
