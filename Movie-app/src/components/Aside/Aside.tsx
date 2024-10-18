import React from 'react';

import CoffeSvg from '../../assets/coffee.svg';
import FilmSvg from '../../assets/film.svg';
import FavoriteSvg from '../../assets/favorite.svg';
import TrendingSvg from '../../assets/trending.svg';
import CalendarSvg from '../../assets/calendar.svg';
import UsersSvg from '../../assets/users.svg';
import MessageSvg from '../../assets/message.svg';
import LogOutSvg from '../../assets/log-out.svg';
import SettingsSvg from '../../assets/sliders.svg';

import styles from './Aside.module.scss';

const Aside: React.FC = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside__title_block}>
        <img src={CoffeSvg} alt="" className={styles.aside__image} />
        <h2 className={styles.aside__title}>WATCH</h2>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__items}>
            <img src={FilmSvg} alt="Film" />
            <a href="#" className={styles.nav__item_Main}>
              Home
            </a>
          </li>
          <li className={styles.nav__items}>
            <img src={FavoriteSvg} alt="Favorite" />
            <a href="#" className={styles.nav__item}>
              Favourites
            </a>
          </li>
          <li className={styles.nav__items}>
            <img src={TrendingSvg} alt="Trending" />
            <a href="#" className={styles.nav__item}>
              Trending
            </a>
          </li>
          <li className={styles.nav__items}>
            <img src={CalendarSvg} alt="Calendar" />
            <a href="#" className={styles.nav__item}>
              Coming soon
            </a>
          </li>
        </ul>
      </nav>
      <ul className={styles.community__list}>
        <li className={styles.community_items}>
          <img src={UsersSvg} alt="Community" />
          <a href="#" className={styles.community__item}>
            Community
          </a>
        </li>
        <li className={styles.community__items}>
          <img src={MessageSvg} alt="" />
          <a href="#" className={styles.community__item}>
            Social
          </a>
        </li>
      </ul>
      <ul className={styles.account__list}>
        <li className={styles.account__items}>
          <img src={SettingsSvg} alt="Community" />
          <a href="#" className={styles.account__item}>
            Settings
          </a>
        </li>
        <li className={styles.account__items}>
          <img src={LogOutSvg} alt="" />
          <a href="#" className={styles.account__item}>
            Logout
          </a>
        </li>
      </ul>
    </aside>
  );
};
export default Aside;
