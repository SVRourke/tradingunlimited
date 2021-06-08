import React from 'react'
import '../styles/slide.scss'

import {ReactComponent as Apple} from '../assets/brands/apple.svg'
import {ReactComponent as Canon} from '../assets/brands/canon.svg'
import {ReactComponent as Garmin} from '../assets/brands/garmin.svg'
import {ReactComponent as GoPro} from '../assets/brands/go-pro.svg'
import {ReactComponent as Hp} from '../assets/brands/hp.svg'
import {ReactComponent as Leica} from '../assets/brands/leica.svg'
import {ReactComponent as Lg} from '../assets/brands/lg.svg'
import {ReactComponent as Microsoft} from '../assets/brands/microsoft.svg'
import {ReactComponent as Samsung} from '../assets/brands/samsung.svg'

const Slider = () => {
    return (
        <div id="slider" >
            <Apple fill="blue" />
            <Garmin fill="blue" />
            <GoPro fill="blue" />
            <Hp fill="blue" />
            <Leica fill="blue" />
            <Lg fill="blue" />
            <Microsoft fill="blue" />
            <Samsung fill="blue" />

            
        </div>
    )
}

export default Slider