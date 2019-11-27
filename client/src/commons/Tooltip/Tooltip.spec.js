/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import { ArrowTooltip } from './Tooltip';

describe('Steps component', () => {
  it('Steps render empty title', () => {
    const rendered = shallow(
      <ArrowTooltip />,
    );

    expect(rendered).toMatchSnapshot();
  });

  it('Steps render filled title', () => {
    const rendered = shallow(
      <ArrowTooltip title="Some text here."/>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
