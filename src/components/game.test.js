'use strict';

import React from 'react';
import Game from './game';
import {shallow} from 'enzyme';
import './configureTests';

describe('Game component', () => {
  it('Smoke test to see if it renders component',() => {
    shallow(<Game />)
  })

  it('It renders the state correctly', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.state('feedback')).toEqual('Make your guess!')
  })
})
  
