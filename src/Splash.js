import React, { Component } from "react";
import './scss/main.scss'

export default class Splash extends Component {
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
      </div>
    )
  }
}