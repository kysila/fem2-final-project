import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import { AddToWishListButton } from './AddToWishListButton';

const mockStore = configureStore([]);

describe('The test of AddToWishListButton component', () => {
  let store;

  beforeAll(() => {
    store = mockStore({
      user: {
        name: 'Chuck',
      },
      wishlist: [1, 2, 3],
    });
  });

  it('AddToWishListButton was rendered', () => {
    const rendered = shallow(
      <Provider store={store}>
        <AddToWishListButton />
      </Provider>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
