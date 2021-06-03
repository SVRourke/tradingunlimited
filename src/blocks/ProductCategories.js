import React, {
    useState
} from 'react'

import { 
    BsPhone,
    BsEnvelopeOpen,
    BsShieldLock
 } from "react-icons/bs";

import { slides } from '../data/categoriesSlides'

import '../styles/ProductCategories.scss'

export default function ProductCategories() {
    const [slideIdx, setSlide ] = useState(0)
    
    let slide = slides[slideIdx]

    const headings = slides.map(s => <button className={'control-button'}>{s.tab}</button>)

    const nextSlide = () => {
        slideIdx < slides.length - 1 ? setSlide(slideIdx + 1) : setSlide(0)
    }

    const prevSlide = () => {
        slideIdx > 0 ? setSlide(slideIdx - 1) : setSlide(slides.length - 1)
    }

    return (
        <section id='categories' className={'block_full-screen'}>
            <div className={'row'}>
                <div className={'column'} >
                    <div className={'img'} style={{backgroundImage: `url("${slide.img}")`}} />
                </div>

                <div className={'column'} >
                    <p className={'blue-tab'}>{slide.tab}</p>
                    <h2 className={'big-title'}>{slide.title}</h2>
                    <p>{slide.blurb}</p>
                </div>
            </div>

            <div className={'row'}>
                {/* <button className={'control-button'} onClick={prevSlide} >previous</button> */}
                {headings}
                {/* <button className={'control-button'} onClick={nextSlide} >next</button> */}
            </div>

        </section>
    )
}
