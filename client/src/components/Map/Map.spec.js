/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import {Map} from './Map';

describe('Map component', () => {
  it('Map render', () => {
    const rendered = shallow(
      <Map onChange={() => null} />,
    );

    expect(rendered).toMatchSnapshot();
  });
});
