import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onDecrement, onIncrement }) => (
  <section className={styles.controls}>
    <button type="button" className={styles.button} onClick={onDecrement}>
      Назад
    </button>
    <button type="button" className={styles.button} onClick={onIncrement}>
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Controls;
