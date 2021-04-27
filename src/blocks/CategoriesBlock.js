import React from 'react'
import '../styles/categories-block.css'

export default function CategoriesBlock() {
    return (
        <div className={'layout-block'} >
          <div className="categories_content">
            <div className="categories_heading">
              <h2>Our Products</h2>
              <p>We're always adding new products to our inventory</p>
            </div>

            <div className="categories_cards">
              <div className='row'>
                <div className='category_card'>
                  <h3>Video</h3>
                </div>

                <div className='category_card'>
                  <h3>Audio</h3>
                </div>

                <div className='category_card'>
                  <h3>Cameras & Lenses</h3>
                </div>
              </div>

              <div className='row'>
                <div className='category_card'>
                  <h3>Personal Electronics</h3>
                </div>

                <div className='category_card'>
                  <h3>Drones</h3>                  
                </div>

                <div className='category_card'>
                  <h3>Computers & IT Equipment</h3>
                </div>
              </div>

            </div>

            
          </div>
        </div>
    )
}
