import React from 'react';
import { shallow } from 'enzyme';

import { Reviews } from './Reviews';

describe('The test of Reviews component', () => {
  it('Reviews was rendered', () => {
    const rendered = shallow(
      <Reviews />,
    );

    expect(rendered).toMatchSnapshot();
  });
});
