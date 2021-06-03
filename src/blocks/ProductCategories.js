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
    const [slide, setSlide ] = useState(slides)
    return (
        <div className={'block_full-screen'}>
            Categories
            <BsPhone />
            <BsEnvelopeOpen />
            <BsShieldLock />            
        </div>
    )
}
