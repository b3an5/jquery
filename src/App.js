import React, { Component } from 'react';
import Splash from './Splash.js';
import Main from './Main.js';
import './App.css';
import jQueryData from './data.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      splash: true,
      score: 0
    }
  }
  
  showMainPage = () => {
    this.setState({
      splash: false
    })
  }

  render() {
    if (this.state.splash === true) {
      return (
          <Splash showMainPage={this.showMainPage} />
      );
    } else {
      return (
          <Main jQueryData={jQueryData.jQueryData} />
      )
    }
  }
}

export default App;
