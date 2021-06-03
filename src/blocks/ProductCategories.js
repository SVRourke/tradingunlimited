import React, {
    useState
} from 'react'

import { 
    BsPhone,
    BsEnvelopeOpen,
    BsShieldLock
 } from "react-icons/bs";


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
