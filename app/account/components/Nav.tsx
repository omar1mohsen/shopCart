"use client"
import Cart from "@/app/components/cart/Cart";
import { UserAuth } from "@/app/context/AuthContext";
import { db } from "@/firebase";
import { Button } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";

function Nav() {
  const [products, setProducts] = useState([]);

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
      <nav className="flex items-center fixed top-0 left-0  w-full justify-between flex-wrap bg-white bg-opacity-80 p-3 z-50 ">
        <Link scroll={false} href="/" className="inline-flex items-center p-2 mr-8 ">
          <Image
            width={50}
            height={50}
            src={require("/app/assets/images/logo.png")}
            alt="Logo image"
            className="mr-4"
          />
          <span className="text-xl text-[#0B4030] font-bold uppercase tracking-wide">
            shopcart
          </span>
        </Link>

        <div className="me-4 justify-center flex items-center">
          <Button onClick={handleOpen}>
            <div className="cart relative">
              <FiShoppingCart className="w-9 h-9 text-[var(--main-color)]" />
              <span className="absolute w-5 h-5 flex items-center justify-center right-0 top-0 p-1 bg-red-500 text-black rounded-[50%] ">
                {products ? products.length : 0}
              </span>
            </div>
          </Button>
        </div>
      </nav>

      <Cart setOpen={setOpen} open={open} />
    </>
  );
}

export default Nav;
