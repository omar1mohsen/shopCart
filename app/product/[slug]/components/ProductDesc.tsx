"use client";
import { product } from "@/app/category/[slug]/components/Products";
import React, { useState } from "react";
import InputNumber from "./InputNumber";
import { db } from "@/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "@/app/context/AuthContext";
import AlertMessage from "./AlertMessage";
import Message from "./Message";
import { motion } from "framer-motion";

function ProductDesc({ product }: { product: product }) {
  const { user } = UserAuth();
  const productId = doc(db, "cart", `${user?.email}`);

  let [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // handle added to cart message
  const [open, setOpen] = React.useState(false);
  const [showMsg, setShowMsg] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2100);
  };

  const addToCart = async () => {
    if (user?.email) {
      if (count < 1) {
        setError("Put the amount");
      } else {
        await updateDoc(productId, {
          products: arrayUnion({
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            count,
            totalPrice: +product.price * count,
          }),
        });
        handleOpen();
      }
    } else {
      setShowMsg(true);
      setMessage("Please login to add products");
    }
  };

  const handlePrice = () => {
    if (count < 1) {
      return product.price;
    }
    return (+product.price * count).toFixed(2);
  };

  return (
    <div
      className="w-full md:w-1/2 px-3 md:px-8 h-full text-center  md:text-start space-y-8 overflow-hidden"
    >
      {message && (
        <Message message={message} showMsg={showMsg} setShowMsg={setShowMsg} />
      )}
      <motion.h2
        initial={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold text-[var(--main-color)] lg:text-4xl capitalize"
      >
        {product.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-slate-500  "
      >
        {product.description}
      </motion.p>

      <motion.hr
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1 }}
      />

      <motion.h2
        initial={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-slate-500"
      >
        <span className=" text-2xl md:text-4xl font-bold text-[var(--main-color)]">
          <span className="text-[var(--sec-color)]">$ {handlePrice()}</span> Or
          9.9/month
        </span>{" "}
        <br />
        Suggested payments with many months
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex w-full space-x-3 justify-center  md:justify-start items-center "
      >
        <InputNumber count={count} setCount={setCount} setError={setError} />
        <span className="text-slate-500 text-start">
          Only <span className="text-red-500">12 items Left!</span> <br /> Don't
          miss it
        </span>
      </motion.div>

      <motion.hr
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1 }}
      />
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, x: 0 }}
       className="flex justify-center md:justify-start items-center space-x-5"
       >
        <button
          className="px-20 py-4 rounded-2xl text-md lg:text-xl font-semibold border-2 hover:bg-slate-400 hover:shadow-md hover:shadow-slate-400 text-[var(--sec-color)] hover:text-[var(--main-color)] transition duration-200 "
          onClick={addToCart}
        >
          Add to cart
        </button>
        {error ? (
          <p className="bg-gray-500/30 px-12 py-4  text-md lg:text-xl font-semibold text-red-500 rounded-xl">
            {error}
          </p>
        ) : null}
      </motion.div>
      <AlertMessage open={open} setOpen={setOpen} />
    </div>
  );
}

export default ProductDesc;
