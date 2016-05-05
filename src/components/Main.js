import React from 'react';
import styles from './Main.css';

class App extends React.Component {
  render () {
    return (
      <div className={styles.header}>
        <h1>Building apps for days</h1>
        <h3>#cantstopwontstop</h3>
      </div>
    );
  }
}

export default App;
