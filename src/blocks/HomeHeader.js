import React from 'react'
import Nav from '../components/Nav'
import secondLogo from '../assets/trading-words.png'
import topLogo from '../assets/top-logo.png'
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
                    padding: "1rem 5rem 2rem",
                }}
            >
                <div className='row' style={{
                    alignItems: "center"
                }}>
                    <img 
                        src={topLogo} 
                        style={{
                            width: '150px',
                        }} 
                    />
                    <Nav />
                </div>

                <div className='header-content column' style={{ width: "fit-content", padding: "0 5rem" }} >
                    <img src={secondLogo} style={{ width: "450px" }} />
                    
                    <div className="row" style={{margin: ".5rem 0", justifyContent: "space-evenly"}}>
                        <button className='header-button'>Learn More</button>
                        <button className='header-button'>Partner With Us</button>
                    </div>
                </div>

                <p style={{textAlign: 'right'}}>Call 954-XXX-XXXX</p>

            </div>

            
        </div>
    )
}
