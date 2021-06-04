import React from 'react'

import { 
    BsPhone,
    BsEnvelopeOpen,
    BsMap
 } from "react-icons/bs";

import '../styles/Contact.scss'


export default function Contact() {
    return (
        <section id="contact" className={'block_full-screen'}>
            <div className={'row'} >
                <div className={'column'}>
                    <h2 className={'big-title'}>Contact Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
                        placerat auctor cursus. Phasellus est ex, vehicula non ultricies 
                        at, pretium ac lacus. Sed luctus nibh eu dui rhoncus pretium. 
                        In dui sapien, faucibus nec porttitor non, pretium ut est. Sed 
                        nisi felis, luctus quis molestie at, blandit ut velit. Aenean 
                        sit amet efficitur diam.
                    </p>
                </div>
                
                <div className={'column'}>
                    <form>
                        <label for="name">Name:</label>
                        <input id="name" type='text' />
                        
                        <label for="email">Email:</label>
                        <input id="email" type='email' />

                        <label for="message">Message:</label>
                        <textarea id="message" type='email' />

                        <input type='submit' value='send' />
                    </form>
                </div>
            </div>
        </section>
    )
}
