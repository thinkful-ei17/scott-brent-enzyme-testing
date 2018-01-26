'use strict';

import React from 'react';
import Game from './game';
import {shallow, mount} from 'enzyme';
import './configureTests';

describe('Game component', () => {
  it('Smoke test to see if it renders component',() => {
    shallow(<Game />)
  })

  it('It renders the state correctly', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.state('feedback')).toEqual('Make your guess!')
  })

  it('Should call the callback function ok', () => {
    const callback = jest.fn();
    const wrapper = mount(<Game onMakeGuess={callback()}/>);
    wrapper.find('form').simulate('submit');
    expect(callback).toHaveBeenCalled();  
  })

  it('Should call the callback function ok', () => {
    const callback = jest.fn();
    const wrapper = mount(<Game onRestartGame={callback()}/>);
    wrapper.find('.new').simulate('click');
    expect(callback).toHaveBeenCalled();
  })

})

describe('Feedback state', () => {
  it("Should return 'You're Ice Cold...'", () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer:20,
    });
    wrapper.instance().makeGuess(100)
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
  })

  it("Should return 'You're Cold...'", () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 20,
    });
    wrapper.instance().makeGuess(60)
    expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
   
  })

  it("Should return 'You're Warm.'", () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 20,
    });
    wrapper.instance().makeGuess(35)
    expect(wrapper.state('feedback')).toEqual('You\'re Warm.');
  })

  it("Should return 'You're Hot!'", () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 20,
    });
    wrapper.instance().makeGuess(25)
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
  })

  it("Should return 'You got it!'", () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 20,
    });
    wrapper.instance().makeGuess(20)
    expect(wrapper.state('feedback')).toEqual('You got it!');
  })
})

describe('Game reset', () => {
  
  it('Should reset state to initial value', () => {
    const originalState = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    }
    const wrapper = shallow(<Game />);

    wrapper.setState({
      guesses: [10, 20, 85, 76],
      feedback: 'You got it!',
      auralStatus: 'Ok',
      correctAnswer: 76
    });

    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual(originalState.guesses);
    expect(wrapper.state('feedback')).toEqual(originalState.feedback);
    expect(wrapper.state('auralStatus')).toEqual(originalState.auralStatus);
    expect(wrapper.state('correctAnswer')).toBeLessThan(101);
    expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
    expect(Number.isInteger(wrapper.state('correctAnswer'))).toEqual(true);
  });  
})
