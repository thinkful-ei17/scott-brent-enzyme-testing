'use strict';

import React from 'react';
import InfoSection from './info-section';
import { shallow } from 'enzyme';
import './configureTests';

describe('InfoSection component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<InfoSection />)
  })
})