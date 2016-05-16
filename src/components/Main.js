import React from 'react';
import { PageHeader } from 'react-bootstrap';

import WebMap from './Map';

import styles from './Main.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <PageHeader>[M]apps for days<small> #cantstopwontstop</small></PageHeader>
        <WebMap />
      </div>
    );
  }
}

export default App;
