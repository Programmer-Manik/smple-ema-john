import React from 'react';
import './Products.css'

const Products = (props) => {
    const { img, name, seller, ratings, price } = props.products
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'> {name}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Price:$  {price}</p>
                <p>Ratings: {ratings}</p>
            </div>
                <button className='product-btn'>Add To Cart</button>
           
        </div>
    );
};

export default Products;