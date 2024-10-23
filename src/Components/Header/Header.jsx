import { useContext, useState } from "react"
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import { Link } from "react-router-dom"
import { ShopContext } from "../../Context/ShopContext"
export default function Header(){
    const [menu, setmenu] = useState("shop")
    const {getTotalCartItem} = useContext(ShopContext)
    return(
        <div className="flex justify-around  p-2  shadow-custom">

            <div className="flex items-center gap-3 ">
                <img src={logo} alt="logo.png" />
                <p className="text-slate-500  text-2xl text-Fonts font-semibold ">
                    Z O N I F Y
                </p>
           </div>
          
            <ul className="flex items-center list-none  gap-12 text-custom-dark2 font-normal" >
                <li  onClick={() => {setmenu("shop")}} 
                className="flex flex-col items-center justify-center gap-1 cursor-pointer  ">
                   <Link to={'/'} style={{textDecoration : 'none'}}>
                    Shop
                    </Link> 
                    {menu === "shop"? <hr className="border-none w-10/12  h-0.5 rounded-xl bg-red-700 mt-2 " /> : <></>}</li>

                <li onClick={() => {setmenu("mens")}} 
                className="flex flex-col items-center justify-center gap-1 cursor-pointer ">
                      <Link to={'/mens'}  style={{textDecoration : 'none'}} >
                   Mens
                 </Link> 
                {menu === "mens"? <hr className="border-none w-10/12  h-0.5 rounded bg-red-700 mt-2 " /> : <></>}</li>


                <li  onClick={() => {setmenu("womens")}}
                className="flex flex-col items-center justify-center gap-1 cursor-">
                    <Link to={'./womens'} 
                     style={{textDecoration : 'none'}}>
                        Womens
                        </Link> 
                        {menu === "womens"? <hr className="border-none w-10/12  h-0.5 rounded-xl bg-red-700 mt-2 " /> : <></>}</li>

                        
                <li  onClick={() => {setmenu("kids")}}className="flex flex-col items-center
                justify-center gap-1 cursor-pointer "> <Link to={'./kids'}  style={{textDecoration : 'none'}} >Kids</Link> {menu === "kids"? <hr className="border-none w-10/12  h-0.5 rounded-xl bg-red-700 mt-2 " /> : <></>}</li>
            </ul> 


           <div className="flex items-center gap-9  " >
            <Link to={'./login'}  style={{textDecoration : 'none'}}>
            <button className="w-28 h-10 outline-none
            border border-gray-500 
            rounded-3xl text-gray-900 text-1xl
            font-medium bg-white hover:bg-gray-200 " >Login</button>
            </Link>
             <Link to={'./card'}  style={{textDecoration : 'none'}}>
            <img src={cart_icon} alt="cart-icon"
             width={30} />
             </Link>
             <div className="w-5 h-5  flex justify-center items-center  rounded-full text-sm bg-rose-700 text-white  -mt-8 -ml-10  text-xs p-2 font-medium " >
                {getTotalCartItem()}
             </div>
           
           </div>
        </div>
    )
}