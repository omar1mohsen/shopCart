import Image from "next/image";
import React from "react";
import { product } from "./Products";
import Link from "next/link";
import RatingComponent from "./RatingComponent";
import AddCartBtn from "@/app/components/AddCartBtn";
import handleTitle from "@/utilts/helpers/HandleTitle";

function ProductCard({ product }: { product: product }) {

  return (
    <div className="w-1/2 md:w-2/6 lg:w-3/12 px-3 md:px-8 h-full rounded-lg">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          width={100}
          height={100}
          alt=""
          className="w-[200px] h-[200px] mx-auto rounded-xl bg-slate-500 mb-5 hover:scale-105 transition duration-200"
        />
        <div className="product-dec space-y-2">
          <div className="flex justify-between w-full">
            <h3 className="text-xs lg:text-lg font-semibold text-[var(--main-color)] text-opacity-70">
              {product.category}
            </h3>
            <h3 className="text-xs lg:text-lg font-semibold text-[var(--main-color)]">
              {product.price} $
            </h3>
          </div>
          <h3 className="text-xs lg:text-lg font-semibold text-[var(--main-color)]">
            {handleTitle(product.title)}
          </h3>
          <RatingComponent rating={product.rating.rate} count={product.rating.count} />
        </div>
        <button className={`px-3 py-2 my-2 rounded-xl text-xs lg:text-lg font-semibold border hover:bg-slate-400 text-[var(--sec-color)] hover:text-[var(--main-color)] transition duration-200 `}>
        Add to cart
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;
