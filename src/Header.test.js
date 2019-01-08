import React from 'react';
import Header from './Header.js';
import { shallow } from 'enzyme';

describe('Header', () => {

  let wrapper;
  const mockResetGame = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <Header 
      resetGame={mockResetGame} />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should run showMainPage when reset game is pressed', () => {
    wrapper.find('.reset-button').simulate('click')
    expect(mockResetGame).toBeCalled();
  })

})