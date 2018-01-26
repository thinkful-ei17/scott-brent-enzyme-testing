'use strict';

import React from 'react';
import StatusSection from './status-section';
import { shallow } from 'enzyme';
import './configureTests';

describe('StatusSection component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<StatusSection guesses={[1,2,3,4,5,6]} />)
  })
})