import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart)
    // const total=cart.reduce((total,peod)=>total+peod.price,0);
    
    let total=0;
    total=Number(total)
    for(let i=0;i<cart.length;i++){
        const newPrice=cart[i];
        total=total+newPrice.price;
       
    }
    
    let shipping=0;
    if(total<100 && total!=0){
         shipping=5
    }
    else if(total>100){
        shipping=(total*5)/100;
        shipping=shipping
    }


   let tex=total*5/100;
   

   const totalAmmount=(total+shipping+tex);
  
   const numberFixed = num =>{
       const initNumber=num.toFixed(2)
       return Number(initNumber)
       
       
   }


    
    return (
        <div className="bawser">

            
           <p>Items Ordered:{cart.length}</p>
           <p>price : $ {numberFixed(total)}</p>
           <p><small>Shipping Cost : $  {numberFixed(shipping)}</small></p>
           <p><small>TEX + VAT : $ {numberFixed(tex)}</small></p>
           <h5>Total Ammount : $ {numberFixed(totalAmmount)}</h5>
           <button className="addCart">Confirm Order</button>
        </div>
    );
};

export default Cart;