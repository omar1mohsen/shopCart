import { product } from '@/app/category/[slug]/components/Products'
import FetchData from '@/utilts/helpers/FetchData'
import Image from 'next/image'
import React from 'react'
import ProductDesc from './ProductDesc'
import ProductImage from './ProductImage'


async function MainPage({productId} : {productId : string}) {
const product : product  = await FetchData(`https://fakestoreapi.com/products/${productId}`)
  return (
    <div className='md:flex px-1 md:px-8 py-12 mt-24 space-y-4 rounded overflow-hidden'>
        <ProductImage product={product} />
        <ProductDesc product={product}  />
    </div>
  )
}

export default MainPage