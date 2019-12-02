import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import { Information } from './Information';

const mockStore = configureStore([]);

describe('The test of Information component', () => {
  let store;

  beforeAll(() => {
    store = mockStore({
      user: {
        firstName: 'Samuel',
        lastName: 'BossSSS',
        email: 'qwe@gmail.com',
        address: 'Kyiv city',
        birthdate: '2016-11-01T19:48:00.000Z',
        gender: 'male',
        haveChildren: 'yes',
        haveCar: 'yes',
        eBicycle: 'yes',
        login: 'seller',
        password: 'afsdfsdfd',
        telephone: '+380992223366',
      },
    });
  });

  it('Information was rendered', () => {
    const rendered = shallow(
      <Provider store={store}>
        <Information />
      </Provider>,
    );

    expect(rendered).toMatchSnapshot();
  });
});