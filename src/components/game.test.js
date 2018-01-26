'use strict';

import React from 'react';
import Game from './game';
import {shallow} from 'enzyme';
import './configureTests';

describe('Game component', () => {
  it('Smoke test to see if it renders component',() => {
    shallow(<Game />)
  })
})
  
