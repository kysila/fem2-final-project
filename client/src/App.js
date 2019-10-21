import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Header} from './commons'
import {MainPage, Products, ProductDetails, NotFound} from './components'

// import axios from 'axios';

// import {MainPage} from './components'

// class App extends React.Component {
//   componentDidMount() {
//     axios.get("/products").then(products => {
//       console.log(products);
//     })
//   }

//   render() {
//
//     return (
//       <div className="App">
//         <p>Test</p>
//       </div>
//     );
//   }
// }
function App() {
    return (
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
    )
}



export default App;
