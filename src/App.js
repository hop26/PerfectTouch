import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App_desktop.css';


import HomePage from './components/homePage'

class App extends Component {
  render() {
    return (
      <div id='app_container' style={{backgroundColor: 'black'}}>
        <HomePage/>
      </div>

    );
  }


}

export default App;
