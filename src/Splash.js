import React, { Component } from "react";
import './scss/main.scss'

export default class Splash extends Component {
  
  passDifficulty = (event) => {
    event.preventDefault();
    event.target.classList.toggle('pushed-button')
    if (event.target.innerText === 'Easy') {
      this.props.setDifficulty(10)
    } else if (event.target.innerText === 'Medium') {
      this.props.setDifficulty(20)
    } else if (event.target.innerText === 'Hard') {
      this.props.setDifficulty(30)
    } else {
      this.props.setDifficulty(41)
    }
  }
  render() {
    return(
      <div className='splash-page'> 
        <h1 className='splash-title'>Jquery knowlege Tester</h1>
        <div className='app-description'>
        <p>Welcome to my app, this is used to test your jQuery skills.</p>
        <p>you will be presented with vanilla javascript</p>
        <p>you must write the equivilent JQuery code in the input box</p>
        </div>
        <button className='splash-button' onClick={this.props.showMainPage}>Click here to get started</button>
        <div className='difficulty-buttons'>
          <button className='difficulty-button pushed-button easy-button' onClick={this.passDifficulty}>Easy</button>
          <button className='difficulty-button' onClick={this.passDifficulty}>Medium</button>
          <button className='difficulty-button' onClick={this.passDifficulty}>Hard</button>
          <button className='difficulty-button' onClick={this.passDifficulty}>Very Hard</button>
        </div>
      </div>
    )
  }
}