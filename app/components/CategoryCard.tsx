import Image from "next/image";
import React from "react";
import all from "../assets/images/all.jpg";
import elec from "../assets/images/tecon.jpg";
import jewelerys from "../assets/images/jewelry.jpg";
import mens from "../assets/images/colth mens.jpg";
import womens from "../assets/images/colth womens.jpg";
import Link from "next/link";

function CategoryCard({ category }: { category: string }) {
  const handleImages = () => {
    return category === "All"
      ? all
      : category === "electronics"
      ? elec
      : category === "jewelery"
      ? jewelerys
      : category === "men's clothing"
      ? mens
      : womens;
  };
  return (
    <Link
      href={`/category/${category}`}
      className="w-1/5 h-[250px] relative top-0 hover:top-[-8px]  category-card "
    >
      <Image src={handleImages()} alt="" className="w-full h-full rounded" />
      <div className="absolute top-5 left-0 text-[var(--main-color)] capitalize text-2xl text-center w-full ">
        <h3 className="py-3 px-1 md:px-3 rounded bg-slate-300 text-xs w-full font-bold md:text-lg lg:text-xl">{category}</h3>
      </div>
    </Link>
  );
}

export default CategoryCard;
