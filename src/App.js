import React, { Component } from 'react'
import { Route } from 'react-router'
import HomeContainer from './layouts/home/HomeContainer'


// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
import ScannerContainer from './components/ScannerContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ScannerContainer}/>
      </div>
    );
  }
}

export default App
