import React from 'react'
import topLogo from '../assets/top-logo.png'
import '../styles/Footer.scss'

export default function Footer() {
    return (
        <footer id='footer' className={'block'}>
            <img src={topLogo} />
            
            <nav>
                <a>Home</a>
                <a>About</a>
                <a>Products</a>
            </nav>
            
            <nav>
                <a>Logistics</a>
                <a>Become A Distributor</a>
                <a>Contact</a>
            </nav>
            
            <div>
                {/* Location badge */}
                {/* Phone badge */}
                {/* Message badge */}
            </div>

        </footer>
    )
}
