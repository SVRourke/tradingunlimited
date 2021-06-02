import React from 'react'

import '../styles/About.scss'

export default function About() {
    return (
        <section id='about' className={'block_full-screen about-block'}>
            <section className={'row'} >
                <div className={'column'}>
                    <p className={'blue-tab'}>About Us</p>
                    <h2 className={'big-title'}>17 Years of <span className={'blue-text'}>Experience</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat auctor 
                        cursus. Phasellus est ex, vehicula non ultricies at, pretium ac lacus. Sed 
                        luctus nibh eu dui rhoncus pretium. In dui sapien, faucibus nec porttitor non,
                        pretium ut est. Sed nisi felis, luctus quis molestie at, blandit ut velit. 
                        Aenean sit amet efficitur diam.
                    </p>

                </div>

                <div className={'column'}>

                </div>

            </section>
        </section>
    )
}
