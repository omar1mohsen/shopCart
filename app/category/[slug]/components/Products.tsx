import React from 'react'
import ProductCard from './ProductCard'
import FetchData from '@/app/utilts/helpers/FetchData'
import { error } from 'console'
import Error from 'next/error'

export interface product {
  id : number , 
  title:string,
  price:string,
  category:string,
  description:string,
  image:string,
  rating : {
    rate : number , 
    count :number
  }
}

async function Products({category} : {category : string}) {
  const products = await FetchData(`${category === "All" ? process.env.NEXT_PUBLIC_ALL_PRODUCTS_URL : `https://fakestoreapi.com/products/category/${category}` }`)
  return (
  <div>
      <h3 className='my-7 capitalize font-bold text-2xl md:text-3xl'>{category} Product For You!</h3>
    <div className='my-5 flex flex-row  gap-y-10 flex-wrap '>
      {products.map((product : product)=>{
        return(      
            <ProductCard key={product.id} product={product}/>
        )
      })}
    </div>
  </div>
  )
}

export default Products