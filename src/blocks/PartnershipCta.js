import React from 'react'
import '../styles/PartnershipCta.scss'

export default function PartnershipCta() {
    return (
        <section id='partnerCta' className={'block'}>
            <h2 className={'big-title'}>Become a Partner</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat 
                auctor cursus. Phasellus est ex, vehicula non ultricies at, pretium 
                ac lacus. 
            </p>
            
            <div className={'row'} >
                <button>Download an Application</button>
                <button>Contact Us</button>
            </div>
        </section>
    )
}
