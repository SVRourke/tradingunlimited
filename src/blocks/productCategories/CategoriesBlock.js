import React from 'react'
import './categories-block.scss'

export default function CategoriesBlock() {
    return (
        <div id={'categories'} className={'layout-block categories'} >
          <div className="categories_content">
            <div className="categories_heading">
              <h2>Our Products</h2>
              <p>We're always adding new products to our inventory</p>
            </div>

            <div className="categories_cards">
              <div className='row'>
                <div id="video-card" className='category_card' >
                  <h3>Video</h3>
                </div>

                <div id="audio-card" className='category_card'>
                  <h3>Audio</h3>
                </div>

                <div id="photography-card" className='category_card'>
                  <h3>Cameras & Lenses</h3>
                </div>
              </div>

              <div className='row'>
                <div id="gadgets-card" className='category_card'>
                  <h3>Personal Electronics</h3>
                </div>

                <div id="drones-card" className='category_card'>
                  <h3>Drones</h3>                  
                </div>

                <div id="computers-card" className='category_card'>
                  <h3>Computers & IT Equipment</h3>
                </div>
              </div>

            </div>

            
          </div>
        </div>
    )
}
