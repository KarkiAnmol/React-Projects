import React from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './checkout';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
         
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/">
            <Header/>
            <Home/>
          </Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;

