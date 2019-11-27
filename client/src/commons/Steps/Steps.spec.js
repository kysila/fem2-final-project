/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import {Steps} from './Steps';

const variants = [
  [
    {
      key: 'id-0',
      isActive: true,
      text: 'Cart',
    },
    {
      key: 'id-1',
      isActive: false,
      text: 'Information',
      src: '/checkout/info',
    },
    {
      key: 'id-2',
      isActive: false,
      text: 'Shipping',
      src: null,
    },
    {
      key: 'id-3',
      isActive: false,
      text: 'Payment',
      src: null,
    },
  ],
  [
    {
      key: 'id-0',
      isActive: true,
      text: 'Cart',
    },
    {
      key: 'id-1',
      isActive: true,
      text: 'Information',
      src: '/checkout/info',
    },
    {
      key: 'id-2',
      isActive: false,
      text: 'Shipping',
      src: null,
    },
    {
      key: 'id-3',
      isActive: false,
      text: 'Payment',
      src: null,
    },
  ],
  [
    {
      key: 'id-0',
      isActive: true,
      text: 'Cart',
    },
    {
      key: 'id-1',
      isActive: true,
      text: 'Information',
      src: '/checkout/info',
    },
    {
      key: 'id-2',
      isActive: true,
      text: 'Shipping',
      src: '/checkout/shipping',
    },
    {
      key: 'id-3',
      isActive: false,
      text: 'Payment',
      src: null,
    },
  ],
  [
    {
      key: 'id-0',
      isActive: true,
      text: 'Cart',
    },
    {
      key: 'id-1',
      isActive: true,
      text: 'Information',
      src: '/checkout/info',
    },
    {
      key: 'id-2',
      isActive: true,
      text: 'Shipping',
      src: '/checkout/shipping',
    },
    {
      key: 'id-3',
      isActive: true,
      text: 'Payment',
      src: '/checkout/payment',
    },
  ],
];

describe('Steps component', () => {
  variants.forEach((items) => {
    it('Steps render', () => {
      const rendered = shallow(
        <Steps items={items} />,
      );

      expect(rendered).toMatchSnapshot();
    });
  });
});
