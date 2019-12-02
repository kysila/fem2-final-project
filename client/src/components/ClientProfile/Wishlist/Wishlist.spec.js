import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import { Wishlist } from './Wishlist';

const mockStore = configureStore([]);

describe('The test of Wishlist component', () => {
  let store;

  beforeAll(() => {
    store = mockStore({
      user: {
        name: 'Chuck',
      },
      wishlist: [1, 2, 3],
      wishlistProducts: [{
        name: 'addmotor hithot h1 sport mountain e-bike',
        itemNo: '2',
        id: '5db6fc84bfb42a414c724e7c',
        itemImg: '/img/products/e-bikes/2/001.jpg',
        price: 1699.99,
        url: '/products/2',
        rating: 4.6,
      }],
    });
  });

  it('Wishlist was rendered', () => {
    const rendered = shallow(
      <Provider store={store}>
        <Wishlist />
      </Provider>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
