import React, { Component } from 'react';
import './resources/styles.css'

import Header from './components/header_footer/Header.js';
import Featured from './components/Featured/';
import VenueNFO from './components/venueNFO';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: 'cornflowerblue' }}>
        <Header />
        <Featured />
        <VenueNFO />
      </div>
    );
  }
}

export default App;
