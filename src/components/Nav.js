import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="row" >
            <Link to='/' >HOME</Link>
            <Link to='/about' >ABOUT</Link>
            <Link to='#' >PRODUCTS</Link>
            <Link to='/partner' >PARTNER</Link>
            <Link to='/contact' >CONTACT</Link>            
        </nav>
    )
}
