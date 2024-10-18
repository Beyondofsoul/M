import React from 'react';

import SearchSvg from '../../assets/search.svg';
import NotionsSvg from '../../assets/notions.svg';
import HeartSvg from '../../assets/heart.svg';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a href="#" className={styles.nav__link}>
                Movies
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#" className={styles.nav__link}>
                Series
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#" className={styles.nav__link}>
                Documentaries
              </a>
            </li>
            <div className={styles.account__items}>
              <img src={SearchSvg} alt="" className={styles.account__search} />
              <img src={NotionsSvg} alt="" className={styles.account__notion} />
              <div className={styles.account__photo}></div>
              <h4 className={styles.account__name}>Tetiana</h4>
            </div>
          </ul>
        </nav>
        <div className={styles.film__info}>
          <h1 className={styles.film__title}>Insider</h1>
          <p className={styles.film__description}>2022 | Comedy horror | 1 Season</p>
          <div className={styles.film__footer}>
            <button className={styles.film__button}>Watch now</button>
            <button className={styles.film__favorite}>
              <img src={HeartSvg} alt="" className={styles.film__heart} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
