import React, {
    useState
} from 'react'

import { 
    BsPhone,
    BsEnvelopeOpen,
    BsShieldLock
 } from "react-icons/bs";

 import { slides } from '../data/categoriesSlides'

export default function ProductCategories() {
    const [slideIdx, setSlide ] = useState(0)
    
    let slide = slides[slideIdx]

    return (
        <div className={'block_full-screen'}>
            <p className={'blue-tab'}>{slide.tab}</p>
            <h2 className={'big-title'}>{slide.title}</h2>
            <p>{slide.blurb}</p>
            <button onClick={nextSlide} >next</button>
            <button onClick={prevSlide} >previous</button>

        </div>
    )
}
