"use client"

import React, { useState } from "react";
import FacebookBtn from "../components/FacebookBtn";
import GoogleBtn from "../components/GoogleBtn";
import AuthNavgiate from "../components/AuthNavgiate";
import { useRouter } from 'next/navigation';
import { UserAuth } from "@/app/context/AuthContext";


function page() {
  const [email , setEmail] = useState<any>('')
const [password , setPassword] = useState<any>('')
const [conPassword , setConPassword] = useState('')
const [error , setError] = useState('')
const { signUp } = UserAuth()
const [emailError , setEmailError] = useState<any>()
const [passError , setPassError] = useState<any>()
const router = useRouter()


 function isValidEmail(email : string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const checkEmail = (e : any)=>{

    if (!isValidEmail(e.target.value)) {
      setEmailError('Please enter a valid email.');
    } else {
      setEmailError(null);
    }
    setEmail({...email,email:e.target.value})
  }

const checkPassword = (e : any)=>{
  if(e.target.value.length < 6 || e.target.value.length > 60  ){
    setPassError('Your password must contain between 6 and 60 characters.');
  } else {
    setPassError(null);
  }
  setPassword({...password,password:e.target.value})
}



const handleSubmit = async (e : any)=>{
  e.preventDefault()
  setError('')
  if(email.email && password.password){
    if(password.password === conPassword){
      try{
          await signUp(email.email,password.password)
          router.push('/')
        } catch(e : any){
          setError(e.message)
      }
    }else{
      setError('Please Check Your Password and Confirmation Password')
    }
}else{
  setError('Please Check Your Password And Username')
}
}

  return (
    <>
      <div className="p-4 md:p-8 w-full md:w-2/3 mx-auto">
        <div className="bg-white rounded-t-lg p-8">
          <p className="text-center text-sm text-gray-400 font-light">
            Sign up with
          </p>
          <div>
            <div className="flex items-center justify-center space-x-4 mt-3">
             <FacebookBtn />
             <GoogleBtn />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 lg:w-2/3 lg:mx-auto rounded-xl py-12 px-4 lg:px-24">
          <p className="text-center text-sm text-gray-500 font-light">
            {" "}
            Or sign up with credentials{" "}
          </p>
          {error?<p className="bg-gray-500/30 text-red-500 my-2 py-2 px-2 rounded" >{error}</p>:null}
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="Email"
                type="email"
                placeholder="Email"
                onChange={checkEmail}
              />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 ml-3 text-gray-400 p-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </div>
              {emailError && <p className="text-[var(--sec-color)] font-semibold italic text-xs md:text-sm mt-3 pb-2 px-1">{emailError}</p>}
            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="username"
                type="password"
                placeholder="Password"
                onChange={checkPassword}
              />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 ml-3 text-gray-400 p-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  >
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
              </div>
            </div>
               {passError && <p className="text-[var(--sec-color)] font-semibold italic text-xs md:text-sm mt-3 pb-2 px-1">{passError}</p>}
            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="username"
                type="password"
                placeholder="Password confirmation"
                onChange={(e)=>{setConPassword(e.target.value)}}
              />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 ml-3 text-gray-400 p-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
              </div>
            </div>
            <AuthNavgiate link="Sign In" />
              <button className="text-white my-5 mx-auto block py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Create Account
              </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default page;
