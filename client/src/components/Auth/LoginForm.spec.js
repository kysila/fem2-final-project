/* eslint-disable */
import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import {LoginForm} from './LoginForm';

describe('LoginForm component', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('LoginForm render', () => {
    const rendered = shallow(
      <LoginForm />
    );

    expect(rendered).toMatchSnapshot();
  });
});
