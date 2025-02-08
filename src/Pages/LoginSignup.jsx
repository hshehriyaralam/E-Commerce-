import './CSS/LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom'
// import Signup from './Signup'
export default function LoginSignup(){
    const navigate = useNavigate
    return(
       <div className="loginsignup">
        <div className="loginssignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />

            </div>
            <button>Continue</button>
            <p className="loginsignup-login">Already have an account 
                <span onClick={() => navigate('/Signup')}> Signup
                </span> 
                
            </p>
            <div className="loginsignup-agree">
                <input type="checkbox" name="" />
                <p>By continue, i agree to the terms of use & privacy policy</p>
            </div>
        </div>
       </div>
    )
}