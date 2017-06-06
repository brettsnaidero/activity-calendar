import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../src/App.js';

const wrapper = shallow(<App />);

describe('(Component) App', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });
});
