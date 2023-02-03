import React from 'react';

import ShoppingIcon from '@mui/icons-material/ShoppingBasket';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header_logo">

      </div>

        <div className="header_searchBar">
        </div>
        
        <div className="header_nav">  

        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign in</span>
        </div>

        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>

        <div className="nav_item">
          <ShoppingIcon color='primary'/>
          <span className="nav_itemLineTwo">0</span>
        </div>


      </div>


    </div>
  );
}

export default App;

