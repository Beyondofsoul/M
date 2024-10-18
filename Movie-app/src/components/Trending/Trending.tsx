import React from 'react';

import HeartSvg from '../../assets/heart2.svg';
import MoviePng from '../../assets/movie.png';

import styles from './Trending.module.scss';

const Trending: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.main__title}>Trending</h2>
        <div className={styles.film__card}>
          <img src={MoviePng} alt="" />
          <div className={styles.film__favorites}>
            <button className={styles.film__favorite}>
              <img src={HeartSvg} alt="" className={styles.film__heart} />
            </button>
          </div>

          <div className={styles.film__movie}></div>

          <div className={styles.film__footer}>
            <h3 className={styles.film__title}>Tokyo Train</h3>
            <p className={styles.film__description}>2022 | Action comedy</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Trending;
