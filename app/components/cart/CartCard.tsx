import React from 'react'
import { CartProduct } from './Cart'
import Image from 'next/image'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import handleTitle from '@/utilts/helpers/HandleTitle';


function CartCard({product, remove} : {product : CartProduct , remove:any} ) {


  return (
    <div className='flex space-x-3 items-center py-8 px-1 md:px-4 border-b-2 border-black/20 relative'>
      <button onClick={()=>{remove(product.id , product.count)}} className='absolute top-7 right-1 md:right-14'><CloseIcon className="h-4 w-4 hover:text-[var(--sec-color)] transition-all" /></button>
      <div className="w-[80px] h-[100px] md:w-[120px] md:h-[120px]">
      <Image 
        width={80}
        height={80}
        className='w-full h-full rounded-xl border-2 p-2'
        src={product.image}
         alt={product.title}
         />
      </div>

         <div className="dec h-full w-full ">
          <div className="">
            <h3 className='text-xs md:text-sm font-semibold text-[var(--main-color)]' >{handleTitle(product.title,10)}</h3>
            <h3 className='text-xs mt-1 md:text-sm font-semibold text-[var(--sec-color)]' >${product.price}</h3>
          </div>
          <div className="flex items-center justify-between mt-3 w-full ">
            <div className="flex items-center space-x-2">
            <input type="number" placeholder={`${product.count}`} value={product.count} className='!focus:border-green-400 border-green-300 text-xs font-semibold rounded-lg my-2 border-2 p-1 ps-2 w-8' />
            <h3 className='text-xs md:text-sm font-light my-1 space-x-1'><CheckIcon className='h-4 w-4  text-[var(--sec-color)]'/> In stock</h3>
            </div>
            <div className="md:me-10">
              <h3 className='text-xs font-semibold md:text-sm text-[var(--sec-color)]'><span className='text-[var(--main-color)]'>Total price :</span>  ${product.totalPrice}</h3>
            </div>
          </div>
         </div>
    </div>
  )
}

export default CartCard