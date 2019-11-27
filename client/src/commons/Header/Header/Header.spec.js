import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Header } from './Header';

const mockStore = configureStore([]);

describe('Header', () => {
  let store;

  beforeAll(() => {
    store = mockStore({
      user: {
        name: 'Chuck',
        email: 'test@gmail.com',
      },
    });
  });

  it('should render correctly', () => {
    const output = shallow(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    expect(output).toMatchSnapshot();
  });
});
