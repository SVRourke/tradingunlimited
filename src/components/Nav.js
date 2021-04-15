import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='#' >Products</Link>
            <Link to='/partner' >Partner with us</Link>
            <Link to='/contact' >Contact</Link>            
        </div>
    )
}
