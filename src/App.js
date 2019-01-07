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
      difficulty: 10,
    }
  }
  
  toggleMainPage = () => {
    this.passDifficulty()
    this.setState({
      splash: !this.state.splash
    })
  }

  setDifficulty = (value) => {
    this.setState({
      difficulty: value
    })
  }

  passDifficulty = () => {
    let difficultyButtons = document.querySelectorAll('.radios');

    for (var i = 0; i < difficultyButtons.length; i++) {
      if (difficultyButtons[i].checked === true) {
        this.setDifficulty(difficultyButtons[i].value)
      }
    }
  }

  render() {
    if (this.state.splash === true) {
      return (
          <Splash 
          setDifficulty={this.setDifficulty}
          showMainPage={this.toggleMainPage} />
      );
    } else {
      return (
          <Main 
          jQueryData={jQueryData.jQueryData}
          difficulty={this.state.difficulty}
          showMainPage={this.toggleMainPage} />
      )
    }
  }
}

export default App;
