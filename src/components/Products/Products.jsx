import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Products = (props) => {
    const { img, name, seller, ratings, price } = props.products
    const addProductCart = props.addProductCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'> {name}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Price:$  {price}</p>
                <p>Ratings: {ratings}</p>
            </div>
                <button className='product-btn' onClick={()=>addProductCart(props.products)}>
                    
                    Add To Cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
           
        </div>
    );
};

export default Products;