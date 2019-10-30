import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import Cookie from 'js-cookie';
import {
  MainPage, Products, ProductDetails, NotFound, Modal,
// eslint-disable-next-line import/named
} from './components';
import './App.css';

import store from './store/index';
import { dispatchGetCustomer } from './store/auth/actions';
import { Search } from './components/Search/Search';

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    body: {
      fontFamily: "'Museo Sans 500'",
      color: '#444444',
    },

    a: {
      textDecoration: 'none',
    },
    '.MuiButton-root': {
      fontFamily: "'Museo Sans 500'",
      background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
      borderRadius: '4px',
      border: 'none',
      color: '#FFFFFF',
    },
    '.MuiTypography-root': {
      fontFamily: "'Museo Sans 500'",
      color: '#444444',
    },
    '.MuiTypography-body2': {
      fontFamily: "'Museo Sans 500'",
    },
    '.MuiButtonGroup-groupedContainedPrimary:not(:last-child)': {
      borderRight: '1px solid #EAEAEA',
    },
    '.MuiContainer-maxWidthMd': {
      maxWidth: '1060px',
    },
    '.MuiCardMedia-root': {
      backgroundSize: 'contain',
    },
    '.MuiButtonGroup-grouped': {
      background: 'none',
      padding: '2px',
      color: '#444444',
    }
  },
})(() => null);

function App() {
  if (Cookie.get('auth')) store.dispatch(dispatchGetCustomer());
  return (
    <Provider store={store}>
      <Router>
        <GlobalCss />
        <div className="App">
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Modal />
      </Router>
    </Provider>
  );
}

export default App;
