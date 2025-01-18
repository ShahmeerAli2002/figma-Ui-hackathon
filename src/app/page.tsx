import React from 'react'




import { Newsletter } from './components/Newsletter'


import { AboutSection } from './components/about'


import { FurnitureHero } from './components/hero'
import { BrandFeatures } from './components/BrandFeatures'
import { Product } from './components/Ceramics'
import PopularProductsSection from './components/popalursproduct/PopularProductsSection'
import NewsletterSection from './components/NewsletterSection'






 // Define or import productsData

const Page = () => {
  return (
    <div>
  
      <FurnitureHero/>
      <BrandFeatures/>
      <Product/>
     
      {/* <PopularProducts products={productsData}/> */}
      <PopularProductsSection/>
      <Newsletter/>
      <AboutSection/>
     <NewsletterSection/>
    
    
     
     
    </div>
  )
}

export default Page
