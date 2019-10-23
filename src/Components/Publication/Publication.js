import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ indexPublication, title, text, key }) => (
  <article className={styles.publication} key={key}>
    <h2>
      {indexPublication}. {title}
    </h2>
    <p>{text}</p>
  </article>
);

Publication.propTypes = {
  indexPublication: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default Publication;
