import React from 'react'
import { 
  Header,
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
        <Header title={'Home'} />

        <StatsBlock />

        <AboutBlock />

        <CategoriesBlock />

        <PartnerCtaBlock />

        <OnPageContactBlock />

      </div>
    )
}
