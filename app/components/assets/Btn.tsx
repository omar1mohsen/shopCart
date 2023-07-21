"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

function Btn({content , className , handleClose} : {content : string , className? : string , handleClose? : any }) {
  return (
    <motion.button
    initial={{opacity:0 , x: "-100%" }}
    whileInView={{opacity:1, x: 0 }}
     onClick={()=>{if(handleClose){handleClose()}}}
    className={`border-2 block w-fit  rounded-3xl bg-[var(--main-color)] ${className} px-5 py-3 text-white text-lg lg:text-xl cursor-pointer hover:bg-green-600 hover:text-green-200`}>
              {content}
    </motion.button>
  )
}

export default Btn