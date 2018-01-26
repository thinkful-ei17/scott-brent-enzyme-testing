'use strict';

import React from 'react';
import GuessList from './guess-list';
import { shallow } from 'enzyme';
import './configureTests';

describe('GuessList component', () => {
  it('Smoke test to see if it renders component', () => { 
    shallow(<GuessList />)
  })

  it('Passes props correctly', () => {
    const guessArray = [56, 32, 71];
    const wrapper = shallow( <GuessList guesses={guessArray} />);
    expect(wrapper.contains(<li key={1}>{32}</li>)).toEqual(true);
  })
})