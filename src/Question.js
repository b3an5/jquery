import React, { Component } from "react";
import './scss/main.scss'

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
    let split = this.props.data.vanilla.split('\n');
    if(this.state.answerVal === '') {
      return(
        <div className='question-card'>
          <h1 className='question-title'>{this.props.data.title}</h1>
          {
            split.map((line) => {
              return <h2 className='vanilla-js'>{line}</h2>
            })
          }
          <input onChange={this.recordAnswer} typeof={Text} className='answer-input'></input>
          <button className='question-button' onClick={this.enterAnswer} >enter</button>
        </div>
      )
    } else if (this.state.answerVal === 'correct') {
      return (
        <div className='question-card'>
          <h1 className='question-title'>{this.props.data.title}</h1>
          <h2 className='vanilla-js'>{this.props.data.vanilla}</h2>
          <h1 className='correct-answer' >{this.props.data.jquery}</h1>
          <h1 className='checkmark'>&#10004;</h1>
        </div>
      )
    } else if (this.state.answerVal === 'incorrect') {
      return (
        <div className='question-card'>
          <h1 className='question-title'>{this.props.data.title}</h1>
          <h2 className='vanilla-js'>{this.props.data.vanilla}</h2>
          <h1 className='incorrect-answer' >{this.state.answerInput}</h1>
          <h1 className='correct-answer' >{this.props.data.jquery}</h1>
          <h1 className='xmark'>X</h1>
        </div>
      )
    }
  }
}