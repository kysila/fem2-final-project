import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import { ClientProfile } from './ClientProfile';

const mockStore = configureStore([]);

describe('The test of ClientProfile component', () => {
  let store;

  beforeAll(() => {
    store = mockStore({
      user: {
        name: 'Chuck',
        login: 'seller',
        password: 'afsdfsdfd',
      },
    });
  });

  it('Wishlist was rendered', () => {
    const rendered = shallow(
      <Provider store={store}>
        <ClientProfile />
      </Provider>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
