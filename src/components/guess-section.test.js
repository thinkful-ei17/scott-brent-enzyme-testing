'use strict';

import React from 'react';
import GuessSection from './guess-section';
import { shallow } from 'enzyme';
import './configureTests';

describe('GuessSection component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<GuessSection />)
  })
})