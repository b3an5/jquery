import React, { Component } from "react";

export default class Question extends Component {
  constructor() {
    super();
    this.state = {
      answerInput: '',
      answerVal: ''
    }
  }

  recordAnswer = (event) => {
    this.setState({
      answerInput: event.target.value
    })
  }

  enterAnswer = () => {
    if (this.props.data.jquery.includes(this.state.answerInput)) {
      this.setState({
        answerVal: 'correct'
      })
      this.props.scoreUp();
    } else {
      this.setState({
        answerVal: 'incorrect'
      })
    }
  }

  render() {
    if(this.state.answerVal === '') {
      return(
        <div>
          <h1>{this.props.data.title}</h1>
          <h2>{this.props.data.vanilla}</h2>
          <input onChange={this.recordAnswer} typeof={Text} className='answer-input'></input>
          <button onClick={this.enterAnswer} >enter</button>
        </div>
      )
    } else if (this.state.answerVal === 'correct') {
      return (
        <div>
          <h1>{this.props.data.title}</h1>
          <h2>{this.props.data.vanilla}</h2>
          <h1 className='correct-answer' >{this.props.data.jquery}</h1>
          <h1>correct</h1>
        </div>
      )
    } else if (this.state.answerVal === 'incorrect') {
      return (
        <div>
          <h1>{this.props.data.title}</h1>
          <h2>{this.props.data.vanilla}</h2>
          <h1 className='incorrect-answer' >{this.state.answerInput}</h1>
          <h1 className='correct-answer' >{this.props.data.jquery}</h1>
          <h1>wrong</h1>
        </div>
      )
    }
  }
}