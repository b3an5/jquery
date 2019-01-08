import React from 'react';
import Splash from './Splash.js';
import { shallow } from 'enzyme';

describe('Splash', () => {

  let wrapper;
  const mockShowMainPage = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <Splash 
      showMainPage={mockShowMainPage} />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call run show main page when button is clicked', () => {
    wrapper.find('.splash-button').simulate('click')
    expect(mockShowMainPage).toBeCalled();
  })

})