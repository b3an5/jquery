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
  const setDifficulty = jest.fn()
  
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
    
    it('should change difficulty in state when set difficulty is called', () => {
      expect(wrapper.state()).toEqual({
        jQueryData: null,
        splash: true,
        difficulty: 10
      })
      wrapper.instance().setDifficulty(20);
      expect(wrapper.state()).toEqual({
        jQueryData: null,
        splash: true,
        difficulty: 20
      })
    })
    
    it('should change splash in state when set toggleMainPage is called', () => {
      expect(wrapper.state()).toEqual({
        jQueryData: null,
        splash: true,
        difficulty: 10
      })
      wrapper.instance().toggleMainPage();
      expect(wrapper.state()).toEqual({
        jQueryData: null,
        splash: false,
        difficulty: 10
      })
    })
    
    it('shouldrun set difficulty when passDifficulty is run', () => {
      let difficultyButtons = [{checked: true}];
      wrapper.instance().passDifficulty();
      expect(setDifficulty).toBeCalled()
    })
  })