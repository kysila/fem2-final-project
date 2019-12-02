/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import {ShowOrderSummary} from './ShowOrderSummary';

describe('ShowOrderSummary component', () => {
  it('ShowOrderSummary render', () => {
    const rendered = shallow(
      <ShowOrderSummary/>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
