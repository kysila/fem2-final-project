import React from 'react';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Cookie from 'js-cookie';

import {
  ClientProfile,
  MainPage,
  NotFound,
  Modal,
  Notifier,
  Checkout,
  TermsConditions,
  PrivacyPolicy,
  Order,
} from './components';
import Compare from './components/Compare/Compare';
import { Unsubscribe } from './components/Unsubscribe/Unsubscribe';
import Search from './components/Search/Search';
import Products from './components/Products/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { GlobalCss, useStyles } from './Appcss';
import store from './store/index';
import { dispatchGetCustomer } from './store/auth/actions';

function App() {
  const classes = useStyles();

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
          <div className={classes.App}>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/profile" exact component={ClientProfile} />
              { /* <Route path="/products" exact component={Products} /> */ }
              <Route path="/shop/filter" component={Products} />
              <Route path="/shop/:id" component={ProductDetails} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/search" component={Search} />
              <Route path="/subscribers/email/:email" component={Unsubscribe} />
              <Route path="/compare" component={Compare} />
              <Route path="/terms-and-conditions" component={TermsConditions} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/order/:id/:discountCode?" component={Order} />
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
