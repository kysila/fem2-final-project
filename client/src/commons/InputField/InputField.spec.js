/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { InputField } from './InputField';

const propsText = {
  id: 'test-id',
  type: 'text',
  label: 'Email',
  labelWidth: 40,
  value: '123',
};

const propsPassword = {
  id: 'test-id',
  type: 'password',
  label: 'Password',
  labelWidth: 70,
  value: 'qwerty123',
};

describe('InputField component', () => {
  it('InputField render text', () => {
    const rendered = shallow(
      <InputField
        {...propsText}
      />,
    );

    expect(rendered).toMatchSnapshot();
  });

  it('InputField render password', () => {
    const rendered = shallow(
      <InputField
        {...propsPassword}
      />,
    );

    expect(rendered).toMatchSnapshot();
  });

});
