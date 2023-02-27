import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.css';

export const Hero = ({ title, subtitle = '' }) => {
  return (
    <div className={styles.hero}>
      {title && <h1 className={styles.title}>{title}</h1>}

      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}

      <div className={styles.decorationBox}>
        <span className={`${styles.decor} ${styles.decorW1}`}></span>
        <span className={`${styles.decor} ${styles.decorW3}`}></span>
        <span className={`${styles.decor} ${styles.decorW40}`}></span>
        <span className={`${styles.decor} ${styles.decorW3}`}></span>
        <span className={`${styles.decor} ${styles.decorW1}`}></span>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
