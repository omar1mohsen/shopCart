import ScrollTop from '@/app/utilts/helpers/ScrollTop'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link onLoadStart={ScrollTop} href='/' className='inline-flex items-center p-2 mr-8 '>
    <Image 
     width={50}
     height={50}
    src={require("/app/assets/images/logo.png")} 
    alt='Logo image' 
    className='mr-4'
    />
    <span className='text-xl text-[#0B4030] font-bold uppercase tracking-wide'>
    shopcart
    </span>
</Link>
  )
}

export default Logo