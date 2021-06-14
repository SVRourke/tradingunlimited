import React from 'react'
import topLogo from '../assets/top-logo.png'
import '../styles/Footer.scss'
import BadgeText from '../components/BadgeText'

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
            
            <div className='badges'>
                <BadgeText icon={"BsMap"} text={"Hollywood FL, USA"} />
                <BadgeText icon={"BsPhone"} text={"+1 954-783-0400"} />
                <BadgeText icon={"BsEnvelopeOpen"} text={"send us a message!"} />
            </div>

        </footer>
    )
}
