import React from 'react';
import { Spinner } from '../Spinner/Spinner';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <Spinner />
    </div>
  );
};
