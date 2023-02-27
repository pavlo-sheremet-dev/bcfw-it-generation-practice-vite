import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Spinner.module.css';

export const Spinner = ({ size = 'xl' }) => {
  const variants = {
    [styles.regular]: size === 'xl',
    [styles.small]: size === 'sm',
  };

  return (
    <div className={styles.loaderBox}>
      <div className={classNames(styles.loaderDot, variants)}></div>
      <div className={classNames(styles.loaderDot, variants)}></div>
      <div className={classNames(styles.loaderDot, variants)}></div>
    </div>
  );
};

Spinner.propTypes = {
  position: PropTypes.string,
};
