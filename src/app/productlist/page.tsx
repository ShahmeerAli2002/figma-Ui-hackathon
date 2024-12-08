import React from 'react'
import { Products } from '../components/productlist/product'
import { FilterContainer } from '../components/productlist/fillterbutton/fillcontaxt'
import { ProductGrid1 } from '../components/productlist/items/productgird'
import { ProductGrid2 } from '../components/productlist/items2/productgird'
import { Navigation } from '../components/Navigation'

const page = () => {
  return (
    <div>
        <Navigation/>
      <Products/>
      <FilterContainer/>
      <ProductGrid1/>
      <ProductGrid2/>
      <ProductGrid1/>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-auto block mt-4">View More</button>
    </div>
  )
}

export default page