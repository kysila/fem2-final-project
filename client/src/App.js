import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {MainPage, Products, ProductDetails, NotFound} from './components';
import { Provider } from 'react-redux';

import store from './store/index';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">

                    <Switch>
                        <Route path={'/'} exact component={MainPage}/>
                        <Route path={'/products'} exact component={Products}/>
                        <Route path={'/products/:id'} component={ProductDetails}/>
                        <Route component={NotFound}/>
                    </Switch>

                </div>
            </Router>
        </Provider>
    )
}

export default App;
