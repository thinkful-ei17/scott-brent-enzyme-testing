'use strict';

import React from 'react';
import GuessCount from './guess-count';
import { shallow } from 'enzyme';
import './configureTests';

describe('GuessCount component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<GuessCount />)
  })
})