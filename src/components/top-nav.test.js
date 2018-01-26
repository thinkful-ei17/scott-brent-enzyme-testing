'use strict';

import React from 'react';
import TopNav from './top-nav';
import { shallow } from 'enzyme';
import './configureTests';

describe('TopNav component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<TopNav />)
  })
})