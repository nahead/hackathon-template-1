import BreadcrumbCart from '@/components/cart-page/BreadcrumbCart'
import ProductCard from '@/components/cart-page/ProductCard'
import React from 'react'

const Page = () => {
  return (
    <div>
      <BreadcrumbCart/>
      <ProductCard data={{
        id: 0,
        name: '',
        srcUrl: '',
        price: 0,
        attributes: [],
        discount: {
          amount: 0,
          percentage: 0
        },
        quantity: 0
      }} {...ProductCard} />
      
    </div>
  )
}

export default Page
