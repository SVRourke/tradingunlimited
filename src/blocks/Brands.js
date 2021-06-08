import React from 'react'
import '../styles/Brands.scss'
import Slider from '../components/Slider'
export default function Brands() {
    return (
        <section id='brands' className={'block'}>
            <h2 className={'big-title'}>Our Partners</h2>
            <p>
                rhoncus pretium. In dui sapien, faucibus nec porttitor non, pretium ut est. Sed 
                nisi felis, luctus quis molestie at, blandit ut velit. Aenean sit amet efficitur 
                diam. Curabitur consequat justo in feugiat porttitor. Pellentesque habitant 
                morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce 
                gravida feugiat efficitur. Nulla consequat tincidunt nisi sed viverra.
            </p>

            <Slider className={'mockup-slider'} />            
        </section>
    )
}
