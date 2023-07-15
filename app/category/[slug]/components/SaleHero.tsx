import Image from 'next/image'
import React from 'react'
import saleImg from "../../../assets/images/saleHero.jpg"
import Btn from '@/app/components/Btn'
function SaleHero({category} : {category : string}) {
  return (
    <div className='mt-24 h-[50vh] w-full relative'>
            <Image
            src={saleImg}
            alt='Sale Image'
            className='w-full h-full my-10 rounded-xl'
            />
            <div className="sale-dec absolute top-36 left-4 md:left-8 lg:left-12 bg-white/80 px-3 w-full md:w-fit  md:ps-5 md:pe-40 py-5 rounded  ">
                <h3 className='text-[var(--main-color)] text-2xl md:text-3xl lg:text-4xl font-bold capitalize mb-3 md:mb-5 leading-normal '>Grap Up To 50 % Off On <br />
                  Selected {category} Products
                </h3>
              <Btn content='Buy Now' />
      </div>

    </div>
  )
}

export default SaleHero