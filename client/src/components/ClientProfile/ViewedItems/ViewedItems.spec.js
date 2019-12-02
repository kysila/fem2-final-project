import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import { ViewedItems } from './ViewedItems';
import { addProductAndCreateWishlistInDB } from '../../../store/wishlist/actions';
const mockStore = configureStore([]);

describe('The test of ViewedItems component', () => {
  let store;

  beforeAll(() => {
    store = mockStore(null,
      {
        addProductToWishlist: addProductAndCreateWishlistInDB,
      });
  });

  it('ViewedItems was rendered', () => {
    const rendered = shallow(
      <Provider store={store}>
        <ViewedItems />
      </Provider>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
