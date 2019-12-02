import React from 'react';
import { shallow } from 'enzyme';

import { ViewedItems } from './ViewedItems';

describe('The test of ViewedItems component', () => {
  it('ViewedItems was rendered', () => {
    const rendered = shallow(
      <ViewedItems />,
    );

    expect(rendered).toMatchSnapshot();
  });
});
