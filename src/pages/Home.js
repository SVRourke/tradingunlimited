import React from 'react'
import { 
  HomeHeader,
  Footer, 
  StatsBlock, 
  AboutBlock, 
  CategoriesBlock,
  PartnerCtaBlock,
  OnPageContactBlock
 } from '../blocks'
 

export default function Home() {
    return (
      <div className='main'>
        <HomeHeader title={'Home'} />

        <StatsBlock />

        <AboutBlock />

        <CategoriesBlock />

        <PartnerCtaBlock />

        <OnPageContactBlock />

      </div>
    )
}
