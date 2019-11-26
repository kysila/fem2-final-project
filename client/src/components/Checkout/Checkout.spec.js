/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import {Checkout} from './Checkout';

describe('Checkout component', () => {
  it('Checkout render', () => {
    const rendered = shallow(
      <Checkout />,
    );

    expect(rendered).toMatchSnapshot();
  });
});
