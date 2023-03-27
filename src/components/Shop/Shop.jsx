import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]= useState([])

    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(num => num.json())
        .then(data => setProducts(data))
    },[])

    const addProductCart = (products)=> {
        const newcart = [...cart,products]
        setCart(newcart)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(products => <Products
                         products={products}
                         key={products.id}
                         addProductCart={addProductCart}
                         ></Products> )
                }
            </div>
            <div className='cart-container'>
                <h1>this cart</h1>
                <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;