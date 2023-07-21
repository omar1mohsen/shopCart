"use client"
import { product } from '@/app/category/[slug]/components/Products'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

function ProductImage({product} : {product : product}) {
  return (
    <motion.div
    initial={{opacity:0 , y: "100%" }}
    transition={{ duration: 1 }}
    animate={{opacity:1,y: 0 }}
     className="w-full md:w-1/2 h-auto px-3 py-12  left-sec bg-slate-500/5 rounded-xl flex justify-center items-center"
     >
    <Image
    src={product.image}
    alt={`${product.title}`}
    width={100}
    height={100}
    className='w-[350px] h-[350px] rounded'
    />
    </motion.div>
  )
}

export default ProductImage