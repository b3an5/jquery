import React, { Component } from "react";

export default class Splash extends Component {
  render() {
    return(
      <div className='splash-page'> 
        <h1 className='splash-title' onClick={this.props.showMainPage} >Jquery knowlege Tester</h1>
      </div>
    )
  }
}