
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import './Shop.css'

const Shop = () => {
    const topTan=fakeData.slice(0,10)
  const [product , setProduct]  = useState(topTan);
  const [cart, setCart]=useState([]);
  const handleAddToCart=(productItems)=>{
     const newCart=[...cart,productItems]
     setCart(newCart);
      console.log(product)

   
  }
    return (
        <div className="shop-container">
        
            <div className="product-conatiner">

                {
                    
                    product.map(productName=><Product 
                        handleAddToCart={handleAddToCart}
                        product={productName}></Product>)
                }

            </div>
            <div className="card-conataier">
              <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;