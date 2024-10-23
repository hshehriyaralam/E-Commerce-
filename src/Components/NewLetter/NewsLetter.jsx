import './NewsLetter.css'
export default function NewsLetter(){
    return(
        <div className='newsletter'>
            <h1>Get Exclusive Ofeers On Your Email</h1>
            <p>Subscribe to our newsletter and stay update</p>
            <div>
                <input type="email" placeholder='Your Email id' />
                <button>Subscribe</button>
            </div>
        </div>

    )
}