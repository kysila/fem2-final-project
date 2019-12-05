/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import { Checkout } from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe('Checkout page', () => {
  let store;

  beforeAll(() => {
    store = mockStore({
      cartReducer: { cart: { products: [] } }
    });
  });

  it('Checkout render', () => {
    const rendered = shallow(
      <Provider store={store}>
        <Checkout />
      </Provider>
    );

    expect(rendered).toMatchSnapshot();
  });
});
