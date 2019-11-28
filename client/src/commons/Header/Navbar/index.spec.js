import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

const mockStore = configureStore([]);

describe('Navbar component', () => {
  let store;

  beforeAll(() => {
    store = mockStore({
      categories: [{
        id: 'e-bikes',
        name: 'bikes',
        imgUrl: 'img/categories/e-bike.png',
        cols: '1',
      }],
    });
  });

  it('Navbar component render', () => {
    const rendered = shallow(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    );
    expect(rendered).toMatchSnapshot();
  });
});
