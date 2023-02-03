import React from 'react';
import './Header.css';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ShoppingIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";

function Header() {
  return (

        <div className='header'>
          <Link to="/" style={{ textDecoration:"none" }}>
            <div className="header_logo">
            <LocalGroceryStoreIcon color='primary' fontSize='large'/>
            <h2 className='header_logoTitle'>eShop</h2>
            </div>
          </Link>
         

          <div className="header_searchBar">
            <input type="text" name="header_searchInput" id="" />
            <SearchIcon className='header_searchIcon'/>

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

          <Link to ="/checkout" style={{textDecoration:"none"}}>

            <div className="nav_item">
                <ShoppingIcon color='primary' fontSize='large' className='itemBasket'/>
                <span className="nav_itemLineTwo nav_basketCount">0</span>
            </div>
          </Link>

       


      </div>
    </div>
  )
}

export default Header