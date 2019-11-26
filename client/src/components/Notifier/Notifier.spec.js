/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import {Notifier} from './Notifier';

describe('Notifier component', () => {
  it('Notifier render', () => {
    const rendered = shallow(
      <Notifier />,
    );

    expect(rendered).toMatchSnapshot();
  });
});
