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
                <Product
                    id="a1"
                    title="TV"
                    price={1200000}
                    rating={5}
                    image="https://static-01.daraz.com.np/p/6ac5dc7458ef7f3ec53e1c5c8f297ece.jpg"
                />y
                <Product
                id="a2"
                    title="Shoes"
                    price={1400}
                    rating={5}
                    image="http://cdn.shopify.com/s/files/1/0075/3929/4305/collections/G22_WA_AP_NAV-Shoes.jpg?v=1645999375"/>  
                <Product
                id="a3"
                    title="comfort shoe"
                    price={3200}
                    rating={5}
                    image="https://www.jiomart.com/images/product/330x410/rvuvl6sgeg/oricum-1566-mens-grey-shoes-product-images-rvuvl6sgeg-0-202202271310.jpg"/>
            </div>
            
            <div className="home_row">
            <Product
            id="2"
                    title="tshirt"
                    price={400}
                    rating={5}
                    image="https://nepalitshirt.com/wp-content/uploads/2020/02/black-plain-round-neck-t-shirts.jpg"/>
            <Product
            id="2"
                    title="nepali t shirt"
                    price={200}
                    rating={5}
                    image=" https://www.clothinginnepal.com/image/cache/catalog/t-shirt/nepal-tshirt-11-1000x1000.jpg"/>
            </div>

            <div className="home_row">
                <Product
                id="2"
                    title="fridge"
                    price={60000}
                    rating={5}
                    image="https://images.thdstatic.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg"/>
                <Product
                id="2"
                    title="Iphone 13 pro"
                    price={140000}
                    rating={5}
                    image="https://images.macrumors.com/t/1WAa6WdZncknBxqwuT3-uQXWLIc=/800x0/smart/article-new/2020/10/iphone-13-models.jpg?lossy"/>
                <Product
                id="2"
                    title="Iphone 14 pro max"
                    price={250000}
                    rating={5}
                    image="https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg"/>
            </div>


        </div>
    )
}
export default Home