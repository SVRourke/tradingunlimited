import React from 'react'
import '../styles/stats-block.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import {   
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelopeOpenText,
  faStopwatch,
  faSitemap,
  faCubes
 } from '@fortawesome/free-solid-svg-icons'


export default function StatsBlock() {
    return (
        <div className={'layout-block'}  >
          {/* style={{backgroundColor: 'rgba(0,0,0,.2)'}} */}
          <div >
          {/* style={{justifyContent: 'space-evenly'}} */}
            <div className="row" >
              <div className="stat-block">
                <FontAwesomeIcon icon={faMapMarkerAlt} size ="2x" />
                <div className="stat-sub-block">
                  <h3>Location:</h3>
                  <p>Hollywood FL, USA</p>
                </div>
              </div>

              <div className="stat-block">
                <FontAwesomeIcon icon={faPhoneAlt} size ="2x" />
                <div className="stat-sub-block">
                  <h3>Call Us:</h3>
                  <p>+1 954-783-0400</p>
                </div>
              </div>

              <div className="stat-block">
                <FontAwesomeIcon icon={faEnvelopeOpenText} size ="2x" />
                <div className="stat-sub-block">
                  <h3>Email:</h3>
                  <p>send us a message!</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="stat-block">
                <FontAwesomeIcon icon={faStopwatch} size ="2x" />
                <div className="stat-sub-block">
                  <h3>Speed:</h3>
                  <p>Orders Shipped Daily</p>
                </div>
              </div>

              <div className="stat-block">
                <FontAwesomeIcon icon={faSitemap} size ="2x" />
                <div className="stat-sub-block">
                  <h3>Flexibility:</h3>
                  <p>Multi-Channel</p>
                </div>
              </div>

              <div className="stat-block">
                <FontAwesomeIcon icon={faCubes} size ="2x" />
                <div className="stat-sub-block">
                  <h3>Volume:</h3>
                  <p>Multi-Warehouse</p>
                </div>
              </div>

              
            </div>


          </div>
        </div>
    )
}
