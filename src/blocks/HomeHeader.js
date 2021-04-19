import React from 'react'
import Nav from '../components/Nav'

const headerStyles = {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgb(0,0,0)',
}

export default function Header({title}) {
    return (
        <div style={headerStyles}>
            <video muted autoPlay loop className="headerVid" style={{background: 'black'}} > 
                <source src='https://ik.imagekit.io/ultimatec/video_b8MieOF-0.mp4' type="video/mp4" />
            </video>

            <div 
            className="overlay column" 
            style={{
                color: 'whitesmoke',
                padding: "2rem 5rem",
                }}>
                <div className='row'>
                    <h1>Logo</h1>
                    <Nav />
                </div>

                <div className='header-content'>
                    <h1 >SECOND LOGO</h1>
                    <button>button 1</button>
                    <button>button 2</button>
                </div>

                <p>Call 954-XXX-XXXX</p>

            </div>

            
        </div>
    )
}
