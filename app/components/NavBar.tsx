"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState , useEffect } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import * as React from 'react';
import Button from '@mui/material/Button';
import AuthBtns from './AuthBtns';
import Cart from './cart/Cart';
import { UserAuth } from '../context/AuthContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase';

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [products, setProducts] = useState([]);
  const handleClick = () => {
    setActive(!active);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const { user } = UserAuth();
  const productRef = doc(db, "cart", `${user?.email}`);

  useEffect(() => {
    onSnapshot(productRef, (doc) => {
      setProducts(doc.data()?.products);
    });
  }, [user?.email]);


  return (
    <>
      <nav className='flex items-center fixed top-0 left-0  w-full justify-between flex-wrap bg-white bg-opacity-80 p-3 z-50 '>
        <Link scroll={false} href='/' className='inline-flex items-center p-2 mr-8 '>
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
        <button
          className=' inline-flex p-3 hover:bg-white bg-[#023E2B] rounded lg:hidden text-white ml-auto hover:text-[#023E2B] outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:justify-between lg:w-auto`}
        >

          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:me-auto items-center   flex flex-col lg:h-auto'>
            <Link scroll={false} href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-[#023E2B] font-semibold items-center justify-center hover:bg-[#328b71] hover:text-white text-lg md:text-xl  transition duration-200' >
                Home
            </Link>
            <Link scroll={false} href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-[#023E2B] font-semibold items-center justify-center hover:bg-[#328b71] hover:text-white text-lg md:text-xl  transition duration-200' >
                Services
            </Link>
            <Link scroll={false} href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-[#023E2B] font-semibold items-center justify-center hover:bg-[#328b71] hover:text-white text-lg md:text-xl  transition duration-200' >
                About us
            </Link>
            <Link scroll={false} href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-[#023E2B] font-semibold items-center justify-center hover:bg-[#328b71] hover:text-white text-lg md:text-xl  transition duration-200' >
                Contact us
            </Link>
          </div>

          <div className="ms-auto justify-center mx-auto lg:mx-4 flex items-center">
          <Button onClick={handleOpen}> 
          <div className="cart relative">
            <FiShoppingCart className='w-9 h-9 text-[var(--main-color)]'/>
           <span className='absolute w-5 h-5 flex items-center justify-center right-0 top-0 p-1 bg-red-500 text-black rounded-[50%] '>{products ? products.length : 0}</span>
           </div>
           </Button>
            <AuthBtns />
          </div>
        </div>
      </nav>

          <Cart setOpen={setOpen} open={open} />
    </>
  );
};
export default Navbar;
