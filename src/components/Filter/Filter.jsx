import React from 'react';
import { CiSearch } from 'react-icons/ci';
import styles from './Filter.module.css';

export const Filter = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          type='text'
          id='search'
          placeholder='Search something..'
        />
      </div>
    </div>
  );
};
