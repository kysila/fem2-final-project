/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import {Modal} from './Modal';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Modal component', () => {
  let store;

  beforeAll(() => {
    store = mockStore({
      modal: { opened: true, child: 'login', inject: {} }
    });
  });

  it('Modal render', () => {
    const rendered = shallow(
      <Provider store={store}>
        <Modal />
      </Provider>
    );

    expect(rendered).toMatchSnapshot();
  });
});
