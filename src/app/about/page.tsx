import React from 'react'
import { Navigation1 } from '../components/about1/navigation'
import BrandMessageContainer from '../components/about1/brandmessage'
import { AboutSection } from '../components/about/aboutsecetion'

import { NewsletterSection1 } from '../components/about1/bino/newslateer'
import { BrandFeatures } from '../components/brabd/Brandfearuter'

const page = () => {
  return (
    <div>
      <Navigation1/>
      <BrandMessageContainer/>
      <AboutSection/>
      <BrandFeatures/>
    
      <NewsletterSection1/>



    </div>
  )
}

export default page
