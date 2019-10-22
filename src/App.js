import React from 'react';
import styles from './App.module.css';
import publications from './path/to/publications.json';
import Reader from './Reader/Reader';

const App = () => {
  return (
    <div className={styles.App}>
      <Reader items={publications} />
    </div>
  );
};

export default App;
