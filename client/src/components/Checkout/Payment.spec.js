/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import {Payment} from './Payment';

describe('Payment component', () => {
  it('Payment render', () => {
    const rendered = shallow(
      <Payment />,
    );

    expect(rendered).toMatchSnapshot();
  });
});
