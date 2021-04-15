import React from 'react'
import Nav from '../components/Nav'

const headerStyles = {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.2)'
}

export default function Header({title}) {
    return (
        <div style={headerStyles}>
            <Nav />
            <h1>{title}: HEADER</h1>
            
        </div>
    )
}
