import React from 'react';
import { shallow } from 'enzyme';

import { OrderList } from './OrderList';

describe('The test of OrderList component', () => {
  it('OrderList was rendered', () => {
    const rendered = shallow(
      <OrderList />,
    );

    expect(rendered).toMatchSnapshot();
  });
});