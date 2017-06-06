import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { expect } from 'chai';

import Map from '../src/components/Map.js';
import MapArea from '../src/components/MapComponents/MapArea.js';

import MapData from '../src/data/mapData.json';

const wrapper = shallow(<Map />);

describe('Map renders correct amount of items', () => {
  it('renders...', () => {
    expect(wrapper.find(MapArea)).to.have.length(MapData.precincts.length);
  });
});

describe('Simulate click of map area', () => {
  it('Calls expected event handlers', () => {
    let number = wrapper.state().currentLevel;
    expect(wrapper.state().currentLevel).to.equal(number);
    wrapper.find(MapArea).first().simulate('click');
    expect(wrapper.state().currentLevel).to.equal(number + 1);
  })
})
