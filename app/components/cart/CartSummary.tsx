import { db } from "@/firebase";
import { deleteDoc, deleteField, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { UserAuth } from "@/app/context/AuthContext";
function CartSummary({
  products,
  handleClose,
  setMessageOpen,
  setMessage
}: {
  products: any[];
  handleClose: any;
  setMessageOpen :React.Dispatch<React.SetStateAction<boolean>>;
  setMessage :React.Dispatch<React.SetStateAction<string>>;
}) {

  const {user} = UserAuth()
// handle payments
  const handleSubTotal = (): number => {
    const totalPrices: string[] = [];
    products.map((product) => totalPrices.push(product.totalPrice));
    return +(+totalPrices.reduce((cru, acc) => cru + acc)).toFixed(2);
  };
  const handleShippingCost = (): number => {
    const subTotal = handleSubTotal();
    return +(+subTotal * 0.03).toFixed(2);
  };
  const handleTaxCost = (): number => {
    const subTotal = handleSubTotal();
    return +(+subTotal * 0.1).toFixed(2);
  };
  const handleTotalCost = (): number => {
    const subTotal = handleSubTotal();
    const shippingCost = handleShippingCost();
    const taxCost = handleTaxCost();
    return +(subTotal + shippingCost + taxCost).toFixed(2);
  };

const handleCheckOut = async()=>{
try{
  setMessageOpen(true)
  setMessage("your order has shipped and is on it's way keep an eye out for your goodies")
  const cartRef = doc(db, 'cart', user?.email);
  await updateDoc(cartRef, {
    products: deleteField()
});
setTimeout(() => {
  setMessageOpen(false);
}, 2100);

}catch(err){
  console.log(err)
}
}

  return (
    <div className="bg-slate-300/40 mt-1 shadow-sm shadow-slate-400 rounded-xl py-5 px-2 text-black">
      <h3 className="font-semibold text-lg text-[var(--main-color)]">
        Order summary
      </h3>
      <div className="py-2 mt-2 w-full border-b-2 border-black/5 flex justify-between px-4 items-center text-sm  text-[var(--sec-color)] capitalize">
        subtotal <span className="font-semibold">${handleSubTotal()}</span>
      </div>
      <div className="py-2 mt-2 w-full border-b-2 border-black/5 flex justify-between px-4 items-center text-sm  text-[var(--sec-color)] capitalize">
        Shipping estimate{" "}
        <span className="font-semibold">${handleShippingCost()}</span>
      </div>
      <div className="py-2 mt-2 w-full border-b-2 border-black/5 flex justify-between px-4 items-center text-sm  text-[var(--sec-color)] capitalize">
        Shipping estimate{" "}
        <span className="font-semibold">${handleTaxCost()}</span>
      </div>
      <div className="py-2 mt-2 w-full border-b-2 border-black/5 flex justify-between px-4 items-center text-md font-semibold  text-[var(--main-color)] capitalize">
        Order total <span className="font-bold">${handleTotalCost()}</span>
      </div>
      <button className="py-3 px-2 w-full bg-blue-500 rounded-lg mt-5 text-[var(--sec-text)] font-semibold hover:bg-blue-600"
      onClick={handleCheckOut}
      >
        Checkout
      </button>
      <button className="my-3 block underline w-fit mx-auto cursor-pointer text-[var(--sec-color)] font-semibold hover:text-blue-600"
      onClick={handleClose}
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default CartSummary;
