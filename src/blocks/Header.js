import React from 'react'
import Logo from '../assets/top-logo.png'
import Words from '../assets/trading-words.png'
import '../styles/Header.scss'

export default function Header() {
    return (
        <div className={'block_full-screen'}>
            <section>
                <img src={Logo} />
                <nav>
                    <a href="#">home</a>
                    <a href="#">about</a>
                    <a href="#">products</a>
                    <a href="#">contact</a>
                </nav>
            </section>

            <section>
                <img src={Words} />
                
                <div>
                    <button>Learn More</button>
                    <button>Partner With Us</button>
                </div>
            </section>

            <section>
                <p>call 1+ 305-777-XXXX</p>
            </section>
        </div>
    )
}
