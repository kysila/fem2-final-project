import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from './Logo';

describe('Logo', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Logo />,
    );
    expect(output).toMatchSnapshot();
  });
});
