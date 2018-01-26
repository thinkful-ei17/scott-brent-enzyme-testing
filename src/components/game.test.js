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
  
