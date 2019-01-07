import React, { Component } from "react";
import Question from "./Question.js";
import Header from "./Header.js";

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
      <Header score={this.state.score} />
      <div className='stickey-header'></div>
        {
          this.props.jQueryData.map((data, index) => {
            return <Question 
            data={data}
            index={index}
            scoreUp={this.scoreUp} />
          }).slice(0, this.props.difficulty)
        }
      </div>
    )
  }
}