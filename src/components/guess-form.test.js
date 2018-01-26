'use strict';

import React from 'react';
import GuessForm from './guess-form';
import { shallow } from 'enzyme';
import './configureTests';

describe('GuessForm component', () => {
  it('Smoke test to see if it renders component', () => {
    shallow(<GuessForm />)
  })
})