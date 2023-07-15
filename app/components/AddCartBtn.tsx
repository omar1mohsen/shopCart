"use client"

import React from 'react'


function AddCartBtn({ className } : { className? : string}) {
  
  return (
    <button className={`${className}px-3 py-2 my-2 rounded-xl text-xs lg:text-lg font-semibold border hover:bg-slate-400 text-[var(--sec-color)] hover:text-[var(--main-color)] transition duration-200 `}    >
    Add to cart
  </button>
  )
}

export default AddCartBtn