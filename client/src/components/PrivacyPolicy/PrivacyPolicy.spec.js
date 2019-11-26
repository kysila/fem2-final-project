/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import {PrivacyPolicy} from './PrivacyPolicy';

describe('PrivacyPolicy component', () => {
  it('PrivacyPolicy render', () => {
    const rendered = shallow(
      <PrivacyPolicy/>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
