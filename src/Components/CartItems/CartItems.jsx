
import { ShopContext } from '../../Context/ShopContext'
import './CartItems.css'
import React, { useContext } from 'react'
import remove_icon from "../assets/cart_cross_icon.png"
export default function CartItems(){
    const  {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext)   
    console.log("Total Amount",getTotalCartAmount())
    return(
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Product</p>
                <p>Tittle</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
            <hr />
    </div> 
    
  {
    all_product.map((e) => {
        if(cartItems[e.id]>0){
            return(
            <div className='cartitems-format cartitems-format-main'>                 
                <img src={e.image} className='carticon-product-icon' alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
        <p>{e.new_price*cartItems[e.id]}</p>
    <img className='cartitems_remove_icon' src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt='' /><hr  />
    
</div>)
       
    } return null
})}  
<div className='cartitems-down'>
    <div className='cartitems-total'>
        <h1>Cart Totals</h1>
        <div>
            <div className='cartitems-total-item'>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>

            </div>
            <hr />
            <div className='cartitems-total-item'>
                <p>Shipping</p>
                <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
                <h3>Total</h3>
                <h3 className='text-bold'>${getTotalCartAmount()}</h3>
            </div>
            <hr />
        </div>
        <button>PROCEED TO CHECKOUT</button>
    </div>
    
    </div>  


        </div>
    )
}
