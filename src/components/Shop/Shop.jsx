import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(num => num.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(products => <Products
                         products={products}
                         key={products.id}
                         ></Products> )
                }
            </div>
            <div className='cart-container'>
                <h1>this cart</h1>
            </div>
        </div>
    );
};

export default Shop;