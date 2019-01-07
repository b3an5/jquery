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
      score: 0,
      difficulty: 10
    }
  }
  
  showMainPage = () => {
    this.setState({
      splash: false
    })
  }

  setDifficulty = (value) => {
    this.setState({
      difficulty: value
    })
  }

  render() {
    if (this.state.splash === true) {
      return (
          <Splash 
          setDifficulty={this.setDifficulty}
          showMainPage={this.showMainPage} />
      );
    } else {
      return (
          <Main 
          jQueryData={jQueryData.jQueryData}
          difficulty={this.state.difficulty} />
      )
    }
  }
}

export default App;
