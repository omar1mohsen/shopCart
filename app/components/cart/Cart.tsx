"use client";
import { Box, Modal, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import CloseIcon from "@mui/icons-material/Close";
import CartCard from "./CartCard";
import CartSummary from "./CartSummary";
import CartMessage from "./CartMessage";

export interface CartProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  count: number;
  totalPrice: number;
}

function Cart({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const style = {
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  const handleClose = () => setOpen(false);

  // show the products in cart
  const [products, setProducts] = useState([]);
  //handle message
  const [messageOpen, setMessageOpen] = React.useState(false);
  const[message,setMessage] =React.useState('');
  //handle doc
  const { user } = UserAuth();
  const productRef = doc(db, "cart", `${user?.email}`);

  useEffect(() => {
    onSnapshot(productRef, (doc) => {
      setProducts(doc.data()?.products);
    });
  }, [user?.email]);


  // handle remove item
  const handelRemoveProduct = (id :number ,count :number) => {
    try {
      const res = products.filter((product: CartProduct) =>  product.id !== id || product.count !== count );
      setProducts(res);
      updateDoc(productRef, {
        products: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex justify-center items-center"
    >
      <Slide direction="up"  in={open} mountOnEnter unmountOnExit>
        <Box
          sx={style}
          className="overflow-hidden overflow-y-scroll h-[90vh] px-4 py-8 border-4 border-green-300 shadow-md shadow-green-400 rounded-xl w-[90%] md:w-[75%] lg:w-[65%]"
        >
          <>
            <div className="head flex justify-between items-center pb-8 border-b-2 border-black/20">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--main-color)] ">
                Shopping Cart
              </h3>
              <button onClick={() => setOpen(!open)}>
                <CloseIcon className="hover:text-[var(--sec-color)] transition-all" />
              </button>
            </div>
            <div className="cards">
              {products && products.length > 0 ? (
                products.map((product: CartProduct) => {
                  return (
                    <CartCard
                      key={product.id}
                      product={product}
                      remove={handelRemoveProduct}
                    />
                  );
                })
              ) : (
                <h1 className="my-[20%] text-center font-semibold text-[var(--sec-color)] capitalize text-xl">
                  {message ? message : "your cart is empty"}
                </h1>
              )}
            </div>
            {products && products.length > 0 ? (
              <CartSummary products={products} handleClose={handleClose} setMessageOpen={setMessageOpen} setMessage={setMessage} />
            ) : null}
            <CartMessage messageOpen={messageOpen} setMessageOpen={setMessageOpen}/>
          </>
        </Box>
      </Slide>
    </Modal>
  );
}

export default Cart;
