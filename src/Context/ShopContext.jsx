import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/assets/all_product";
import CartItems from "../Components/CartItems/CartItems";

export const ShopContext = createContext(null)
const getDefaultCart = () =>{
    let cart = {}
    
    for(let i = 0; i < all_product.length; i++ ){
        cart[i] = 0
    }
    return cart;
}
const ShopContextProvider = (props) =>  {
    const [cartItems, SetCartItems] = useState(getDefaultCart())
    
    
    const addToCart = (itemId) => {
        SetCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        // console.log("CartItems",cartItems)
        // console.log("cart",cartItems);
    }
    const removeFromCart = (itemId) => {
             SetCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }
 
 let getTotalCartAmount = () => {
    let totalAmount =  0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo = all_product.find((priduct)=> priduct.id === Number(item))
            totalAmount += itemInfo.new_price * cartItems[item]
        }
    }
    return totalAmount;
}

let getTotalCartItem = () => {
    let totalItem = 0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalItem += cartItems[item]
        }
    }
    return totalItem;
}
    let contextValue = {getTotalCartItem,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart}
    return(
        <ShopContext.Provider value={contextValue}  >
            {props.children}
        </ShopContext.Provider>
    )

}


export default ShopContextProvider;