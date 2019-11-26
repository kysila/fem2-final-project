/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import {TermsConditions} from './TermsConditions';

describe('TermsConditions component', () => {
  it('TermsConditions render', () => {
    const rendered = shallow(
      <TermsConditions/>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
