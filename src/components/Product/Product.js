import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, price, key, seller,star,stock } = props.product;
   

    return (
        <div className="product">
            <div className="productImg">
                <img src={img} alt="" />
            </div>
            <div className="productDetails">
                <h2>Name : {name}</h2>
                <br />
                <h3> Price :  $ {price}</h3>
                <br />
                <h4> Product Code : {key}</h4>
                <br />
                    <div className="rating-div">
                    <p>by : {seller}</p>
                    <p className="rating">Rating : {star}</p>
                    </div>
                <br />
                <p>In Stock : {stock}</p>
                <button 
                onClick={()=>props.handleAddToCart(props.product)}
                className="addCart"><FontAwesomeIcon icon={faShoppingCart} className="shoppingCart"/>Add to cart</button>
            </div>

        </div>
    );
};

export default Product;