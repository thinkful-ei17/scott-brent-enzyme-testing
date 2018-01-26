'use strict';

import React from 'react';
import AuralStatus from './aural-status';
import { shallow } from 'enzyme';
import './configureTests';

describe('AuralStatus component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<AuralStatus />)
  })
})