import React from "react"
import './Descriptionbox.css'


export default function DescriptionBox(){
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade ">
                    Reviews (122)
                </div>
            </div>

            <div className="descriptionbox-dscription">
                <p>
                Discover a seamless shopping experience with our e-commerce application, featuring a wide range of products from electronics to fashion. Enjoy user-friendly navigation, secure payment options, and real-time order tracking. Create personalized accounts to manage your orders and receive tailored recommendations. Join us today and shop with convenience at your fingertips!
                </p>
                <p>
                Experience a seamless shopping journey with our e-commerce app, offering a diverse selection of products and secure payment options. Enjoy user-friendly navigation and real-time order tracking for convenience. Sign up today to manage your orders and receive personalized recommendations!
                </p>
            </div>
        </div>
    )
}