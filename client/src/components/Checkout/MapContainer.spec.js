/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import {MapContainer} from './MapContainer';

describe('MapContainer component', () => {
  it('MapContainer render', () => {
    const rendered = shallow(
      <MapContainer onClick={() => null}/>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
