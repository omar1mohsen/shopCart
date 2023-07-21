import Image from 'next/image'
import React from 'react'
import saleImg from "../../../assets/images/saleHeroa.png"
import Btn from '@/app/components/assets/Btn'
function SaleHero({category} : {category : string}) {
  return (
    <div className='mt-24 h-[50vh] w-full relative bg-[#f6f6f6] rounded-2xl '>
            <Image
            src={saleImg}
            alt='Sale Image'
            className='ms-auto sm:me-12 w-100 h-100  max-md:w-full max-md:h-full sm:my-10 rounded-xl '
            />
            <div className="sale-dec absolute top-16 left-0 md:top-24 md:left-8 lg:left-12 bg-white/80 px-3 w-full md:w-fit  md:ps-5 md:pe-40 py-5 rounded  ">
                <h3 className='text-[var(--main-color)] text:text-md sm:text-xl md:text-3xl lg:text-4xl font-bold capitalize mb-3 md:mb-5 leading-normal '>Grap Up To 50 % Off On <br />
                  Selected {category} Products
                </h3>
              <Btn content='Buy Now' />
      </div>

    </div>
  )
}

export default SaleHero