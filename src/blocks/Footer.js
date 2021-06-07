import React from 'react'
import topLogo from '../assets/top-logo.png'

export default function Footer() {
    return (
        <section className={'block'}>
            <img src={topLogo} />

            <section className={'footer-nav'} >
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
            </section>
        </section>
    )
}
