import React from 'react';
import './App.css';

import {MainPage} from './components'
import axios from 'axios';






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
        <MainPage/>
    )

}
export default App;
