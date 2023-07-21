"use client"
import React from 'react'
import AuthBtn from './assets/AuthBtn';
import { UserAuth } from "@/app/context/AuthContext";
import {BsPersonFill} from "react-icons/bs";
import DropMenu from './assets/DropMenu';

function AuthBtns() {
    const {user } = UserAuth()
 
     const handleMenu = ()=>{
        user &&  (document.querySelector('.drop-menu') as HTMLElement).classList.toggle('hidden')
    }
    
  return (
    <div className='relative'>
    {user? 
    <div onClick={handleMenu} className="h-10 w-10  rounded-[50%] font-bold text-xl bg-slate-600 cursor-pointer flex items-center justify-center text-white uppercase " >
     <BsPersonFill className="h-6 w-6" />
    </div>
     :
     <div>
       <AuthBtn isSingin={true} />
       <AuthBtn isSingin={false} /> 
     </div>
    }
  <DropMenu />
    </div>
  )
}

export default AuthBtns