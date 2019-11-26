/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import {Contacts} from './Contacts';

describe('Contacts component', () => {
  it('Contacts render', () => {
    const rendered = shallow(
      <Contacts/>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
