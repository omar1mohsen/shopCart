import Link from 'next/link'
import React from 'react'

function AuthNavgiate({link} : {link : string}) {
    const handleContent = ()=>{
        if(link === "Sign Up"){
            return(<p className='mt-4 italic text-gray-500 font-ligh'>I'm new here <span className='underline font-bold text-green-400 '>Sign Up</span></p>)
        }else{
            return (<p className='mt-4 italic text-gray-500 font-ligh'>i have account already <span className='underline font-bold text-green-400 '>Login</span></p>)
        }
    }
  return (
    <Link href={`${link === "Sign Up" ? "/auth/signup" : "/auth/signin" }`} 
    className='my-3 block text-center '>
        {handleContent()}
    </Link>
  )
}

export default AuthNavgiate