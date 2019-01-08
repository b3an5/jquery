import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from "enzyme";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have the correct default state', () => {
    expect(wrapper.state()).toEqual({
      jQueryData: null,
      splash: true,
      difficulty: 10
    })
  })
})