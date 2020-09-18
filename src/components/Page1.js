import React from 'react'
import logo from '../../public/images/logo.png'

const Page1 = () => {
    return (
        <div className='page1'>

            <div className='head1'>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>

            <div className='page1__media'>
                <img src={logo} />
                <iframe
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/6272_pxZSjY" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>

            <div className='page1__text'>
                <h2>Sustainablility for a connected world</h2>
                <h2>No matter how you define it</h2>
            </div>

            <div className='page1__button'>
                <button>Get Inurgized</button>
                <button>Login</button>
            </div>

            <div className='page1__terms'>
                <h5>By clicking Get Inurgized, you agree with our <span>Terms of Service</span> and <span>Privacy Policy</span></h5>
                <h5>© 2020 inurgi, All rights reserved</h5>
            </div>
            
        </div>
    )
}

export default Page1