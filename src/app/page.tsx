import React from 'react'

import { FurnitureHero } from './components/hero/funitureHero'
import { BrandFeatures } from './components/brabd/Brandfearuter'
import { CeramicsCollection } from './components/caramise/careamise'
import { Newsletter } from './components/newsellter/finalsellter'


import { AboutSection } from './components/about/aboutsecetion'

import { PopularProductsSection } from './components/popalursproduct/finalproduct'


 // Define or import productsData

const Page = () => {
  return (
    <div>
  
      <FurnitureHero/>
      <BrandFeatures/>
      <CeramicsCollection/>
      {/* <PopularProducts products={productsData}/> */}
      <PopularProductsSection/>
      <Newsletter/>
      <AboutSection/>
     
    </div>
  )
}

export default Page
