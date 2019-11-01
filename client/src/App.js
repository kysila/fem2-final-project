import React from 'react';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import Cookie from 'js-cookie';
import {
  MainPage, Products, ProductDetails, NotFound, Modal, Notifier,
} from './components';
import { Search } from './components/Search/Search';
import './App.css';

import store from './store/index';
import { dispatchGetCustomer } from './store/auth/actions';

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
    },
  },
})(() => null);

function App() {
  if (Cookie.get('auth')) store.dispatch(dispatchGetCustomer());
  return (
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={3000}
      >
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
        </Router>
        <Notifier />
        <Modal />
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
