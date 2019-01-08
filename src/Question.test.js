import React from 'react';
import Question from './Question.js';
import { shallow } from 'enzyme';

const mockQuestionData = {
  "title": "Add Class",
  "jquery": "$(el).addClass(className);",
  "vanilla": `if (el.classList)
      el.classList.add(className);\nelse\n  el.className += ' ' + className;`,
  "id": 3
}

describe('Question', () => {

  let wrapper 
  const mockScoreUp = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Question
      data={mockQuestionData}
      scoreUp={mockScoreUp} />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have the correct default state', () => {
    expect(wrapper.state()).toEqual({
      answerInput: '',
      answerVal: ''
    })
  })

  it('should change answerInput in state when input is typed in', () => {
    expect(wrapper.state()).toEqual({ answerInput: '', answerVal: '' })
    wrapper.find('.answer-input').simulate('change', { target: { value: 'blah' } })
    expect(wrapper.state()).toEqual({ answerInput: 'blah', answerVal: '' })
  })

  it('should change answerVal in state when button is pressed and should read correct', () => {
    expect(wrapper.state()).toEqual({ answerInput: '', answerVal: '' })
    wrapper.find('.answer-input').simulate('change', { target: { value: 'blah' } })
    expect(wrapper.state()).toEqual({ answerInput: 'blah', answerVal: '' })
    wrapper.find('.question-button').simulate('click')
    expect(wrapper.state()).toEqual({ answerInput: 'blah', answerVal: 'incorrect' })
  })
  
  it('should change answerVal in state when button is pressed and should read correct', () => {
    expect(wrapper.state()).toEqual({ answerInput: '', answerVal: '' })
    wrapper.find('.answer-input').simulate('change', { target: { value: '$(el).addClass(className);' } })
    expect(wrapper.state()).toEqual({ answerInput: '$(el).addClass(className);', answerVal: '' })
    wrapper.find('.question-button').simulate('click')
    expect(wrapper.state()).toEqual({ answerInput: '$(el).addClass(className);', answerVal: 'correct' })
  })
})