import React, { Component } from "react";
import Question from "./Question.js";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    }
  }

  scoreUp = () => {
    this.setState({
      score: this.state.score += 100
    })
  }

  render() {
    return (
      <div className='main-page'>
        <h1 className='main-title'>main Page</h1>
        <h2>score:<span>{this.state.score}</span></h2>
        {
          this.props.jQueryData.map((data, index) => {
            return <Question 
            data={data}
            index={index}
            scoreUp={this.scoreUp} />
          })
        }
      </div>
    )
  }
}