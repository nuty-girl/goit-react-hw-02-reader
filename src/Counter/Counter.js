import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ publicationId, publicationQuantity }) => (
  <p className={styles.counter}>
    {publicationId}/{publicationQuantity}
  </p>
);

Counter.propTypes = {
  publicationId: PropTypes.number.isRequired,
  publicationQuantity: PropTypes.number.isRequired,
};

export default Counter;
