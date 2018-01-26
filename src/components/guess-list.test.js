'use strict';

import React from 'react';
import GuessList from './guess-list';
import { shallow } from 'enzyme';
import './configureTests';

describe('GuessList component', () => {
  it('Smoke test to see if it renders component', () => { 
    shallow(<GuessList guesses={[1,2,3,4,5,6]}/>)
  })
})