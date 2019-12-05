/* eslint-disable */
import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { RegisterForm } from './RegisterForm';

describe('RegisterForm component', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('RegisterForm render', () => {
    const rendered = shallow(
      <RegisterForm />,
    );

    expect(rendered).toMatchSnapshot();
  });
});
