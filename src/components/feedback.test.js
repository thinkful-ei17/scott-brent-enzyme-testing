'use strict';

import React from 'react';
import Feedback from './feedback';
import { shallow } from 'enzyme';
import './configureTests';

describe('Feedback component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<Feedback />)
  })
})