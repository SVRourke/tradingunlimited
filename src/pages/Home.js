import React from 'react'
import { 
  HomeHeader,
  StatsBlock, 
  About, 
  CategoriesBlock,
  CtaBlock,
  OnPageContact
 } from '../blocks'


 

export default function Home() {
    return (
      <div className='main'>
        <HomeHeader title={'Home'} />

        <StatsBlock />

        <About />

        <CategoriesBlock />

        <CtaBlock />

        <OnPageContact />

      </div>
    )
}
