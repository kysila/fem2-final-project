/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import {CheckoutOrderProduct} from './CheckoutOrderProduct';

describe('CheckoutOrderProduct component', () => {
  it('CheckoutOrderProduct render', () => {
    const rendered = shallow(
      <CheckoutOrderProduct
        title="Some title"
        quantity={10}
        price="10000"
        src="/img/products/e-scooters/001.jpg"
      />,
    );

    expect(rendered).toMatchSnapshot();
  });
});
