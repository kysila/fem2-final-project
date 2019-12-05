import React from 'react';
import { shallow } from 'enzyme';

import { MainCarousel } from './MainCarousel';

describe('The test of MainCarousel component', () => {
  it('MainCarousel was rendered', () => {
    const rendered = shallow(
      <MainCarousel />,
    );

    expect(rendered).toMatchSnapshot();
  });
});
