import React from 'react';
import './Home.css';
import Product from './product.js';


function Home(){
    return (
        <div className='Home'>
            <div className="home_container"> 
            <img src="https://img.freepik.com/free-vector/online-shopping-banner-with-3d-shopping-cart-clouds-social-icons-vector-illustration_548887-100.jpg" alt="home Image" className="home_image" />
            </div>

            <div className="home_row">
                <Product/>
                <Product/>  
                <Product/>
            </div>
            
            <div className="home_row">
            <Product/>
            <Product/>
            </div>

            <div className="home_row">
                <Product/>
                <Product/>
                <Product/>
            </div>


        </div>
    )
}
export default Home