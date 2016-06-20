import React from 'react';
import { PageHeader } from 'react-bootstrap';

import OpenlayersMap from './olMap';

import styles from './Main.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <PageHeader>[M]apps for days</PageHeader>
        <OpenlayersMap />
      </div>
    );
  }
}

export default App;
