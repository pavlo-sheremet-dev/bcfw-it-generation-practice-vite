import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

export const Section = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className='container'>{children}</div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
