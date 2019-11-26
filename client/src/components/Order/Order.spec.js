/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import {Order} from './Order';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Order component', () => {
  let store;

  beforeAll(() => {
    store = mockStore({
      modal: { opened: true, child: 'login', inject: {} }
    });
  });

  it('Order render', () => {
    const rendered = shallow(
      <Provider store={store}>
        <Order />
      </Provider>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
