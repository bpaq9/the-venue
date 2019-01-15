import React, { Component } from 'react';
import './resources/styles.css'

import Header from './components/header_footer/Header.js';
import Featured from './components/Featured/';
import VenueNFO from './components/venueNFO';
import Highlights from './components/Highlights';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px"}}>
        <Header />
        <Featured />
        <VenueNFO />
        <Highlights/>
      </div>
    );
  }
}

export default App;
