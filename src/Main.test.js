import React from 'react';
import Main from './Main.js';
import { shallow } from 'enzyme';
import jQueryData from './data.js';

describe('Container', () => {

  let wrapper 

  const mockShowMainPage = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Main 
        jQueryData={jQueryData.jQueryData}
        showMainPage={mockShowMainPage} />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match default state', () => {
    expect(wrapper.state()).toEqual({
      score: 0,
      highScore: 0
    })
  })

  it('should increase the score when score up is called', () => {
    expect(wrapper.state()).toEqual({
      score: 0,
      highScore: 0
    })
    wrapper.instance().scoreUp();
    expect(wrapper.state()).toEqual({
      score: 100,
      highScore: 100
    })
  })

  it('should reset the score when reset game is called but not high score', () => {
    expect(wrapper.state()).toEqual({
      score: 0,
      highScore: 0
    })
    wrapper.instance().scoreUp();
    expect(wrapper.state()).toEqual({
      score: 100,
      highScore: 100
    })
    wrapper.instance().resetGame();
      expect(wrapper.state()).toEqual({
        score: 0,
        highScore: 100
      })
  })
})
