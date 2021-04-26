import React from 'react'

const statsRow = {
  
}
export default function StatsBlock() {
    return (
        <div className={'layout-block'} >
          <div style={{height: '50vh'}}>
            <div className="row" style={statsRow}>
              <div className="stat-block">
                <i class="fa fa-map-marker"></i>
                <h3>Location:</h3>
                <p>Hollywood FL, USA</p>
              </div>

              <div className="stat-block">
                <i class="fa fa-mobile "></i>
                <h3>Call Us:</h3>
                <p>+1 954-783-0400</p>
              </div>

              <div className="stat-block">
                <i class="fa fa-paper-plane"></i>
                <h3>Email:</h3>
                <p>send us a message!</p>
              </div>
            </div>

            <div className="row" >
              <div className="stat-block">
                <i class="fa fa-bolt"></i>
                <h3>Speed:</h3>
                <p>Orders Shipped Daily</p>
              </div>

              <div className="stat-block">
                <i class="fa fa-sitemap"></i>
                <h3>Flexibility:</h3>
                <p>Multi-Channel</p>
              </div>

              <div className="stat-block">
                <i class="fa fa-cubes"></i>
                <h3>Volume:</h3>
                <p>Multi-Warehouse</p>
              </div>
            </div>


          </div>
        </div>
    )
}
