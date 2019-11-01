import React from 'react';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import Cookie from 'js-cookie';
import {
  MainPage, Products, ProductDetails, NotFound, Modal, Notifier,
} from './components';
import Unsubscribe from "./components/Unsubscribe/Unsubscribe";
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
      backgroundColor: '#fff',
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
    '.MuiFormLabel-root': {
      fontFamily: "'Museo Sans 500'",
    },
    '.MuiMenu-paper': {
      maxHeight: '40vh',

    },
    '.sf-download-bar': {
      fontFamily: "'Museo Sans 500'",
    },
    '.MuiInputBase-root': {
      fontFamily: "'Museo Sans 500'",
    },
    '.MuiSlider-root': {
      color: '#8F8DE2',
      padding: '50px 0 0',
    },
    '.MuiSlider-valueLabel': {
      transform: 'scale(1) translate(3px, -10px)',
    },
    '.MuiSlider-valueLabel>span': {
      background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%) !important',
      width: '25px',
      height: '25px',
      fontSize: '10px',
    },
    '.MuiGrid-spacing-xs-3': {
      width: '100%',
      margin: 'auto',
    },
    '.MuiGrid-spacing-xs-6 ': {
      width: '100%',
      margin: 'auto',
    },
    '.MuiListItemText-root': {
      fontFamily: "'Museo Sans 500'",
    },
    '.MuiPopover-paper': {
      minWidth: '20vw !important',
    },
    '.Mui-selected': {
      boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.05)',
    },
    '.MuiButtonGroup-grouped': {
      background: 'none',
      color: '#444444',
    },
    '.MuiTab-root': {
      minWidth: 'auto',
      padding: '6px 16.5px',
      color: '#444444',
      fontSize: '14px',
    },
    '.MuiTab-textColorPrimary.Mui-selected': {
      color: '#6A86E8'
    },
    '.MuiTabs-indicator': {
      backgroundColor: '#6A86E8'
    },
    '.MuiPaper-root': {
      boxShadow: 'none',
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
              <Route path="/unsubscribe" components={Unsubscribe} />
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
