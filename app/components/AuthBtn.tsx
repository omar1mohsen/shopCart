import Link from 'next/link'
import React from 'react'

const AuthBtn = ({isSingin} :{isSingin : boolean}) => {
  return (
    <Link scroll={false} href={`${isSingin? "/auth/signin" : "/auth/signup"}`} className={`px-2 py-2 font-semibold capitalize md:px-8 mx-2 border-[1px] rounded transition duration-200 border-[#0d6b4f] ${isSingin ? "bg-white text-[#0B4030] hover:bg-[#328b71] hover:text-[var(--sec-text)] " : "bg-[#0d6b4f] text-white hover:bg-[#328b71] "} `}>
    {isSingin ? "Sign In ": "Sign Up"}
    </Link>
  )
}

export default AuthBtn