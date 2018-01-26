'use strict';

import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';
import './configureTests';

describe('Header component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<Header />)
  })
})