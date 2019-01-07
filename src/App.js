import React, { Component } from 'react';
import Splash from './Splash.js';
import Main from './Main.js';
import jQueryData from './data.js'
import './scss/main.scss'


class App extends Component {
  constructor() {
    super();
    this.state = {
      jQueryData: null,
      splash: true,
      difficulty: 10,
    }
  }

  componentDidMount = () => {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/JqueryData')
      .then(response => response.json())
      .then(jQueryData => this.setState({
        jQueryData: jQueryData.jQueryData
      }))
      .catch(error => console.log(error));
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
          jQueryData={this.state.jQueryData}
          difficulty={this.state.difficulty}
          showMainPage={this.toggleMainPage} />
      )
    }
  }
}

export default App;
