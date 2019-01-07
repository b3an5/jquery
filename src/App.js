import React, { Component } from 'react';
import Splash from './Splash.js';
import Main from './Main.js';
import jQueryData from './data.js'
import './scss/main.scss'


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
