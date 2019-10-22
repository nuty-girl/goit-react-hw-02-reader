import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ publicationId, title, text, key }) => (
  <article className={styles.publication} key={key}>
    <h2>
      {publicationId}. {title}
    </h2>
    <p>{text}</p>
  </article>
);

Publication.propTypes = {
  publicationId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default Publication;
