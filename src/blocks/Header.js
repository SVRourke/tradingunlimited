import React from 'react'
import Logo from '../assets/top-logo.png'
import Words from '../assets/trading-words.png'
import '../styles/Header.scss'

export default function Header() {
    return (
        <header className={'block_full-screen'}>

            <section className={'navbar'}>
                <img src={Logo} />
                
                <nav>
                    <a href="#">home</a>
                    <a href="#">about</a>
                    <a href="#">products</a>
                    <a href="#">contact</a>
                
                </nav>
            </section>


            <section className={'header_content'}>
                <img src={Words} />
                
                <div>
                    <button>Learn More</button>
                    <button>Partner With Us</button>

                </div>
            </section>


            <section className={'header_phone'}>
                <p>call 1+ 305-777-XXXX</p>
            </section>
        </header>
    )
}
