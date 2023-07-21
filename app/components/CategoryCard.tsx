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
  const handleClasses = ()=>{
    return category === "All"
      ? " col-span-1  max-sm:h-[250px] h-80 w-full "
      : category === "electronics"
      ? " col-span-1  max-sm:h-[250px] h-80 w-full "
      : category === "jewelery"
      ? "col-span-1 row-span-1 md:row-span-2 max-sm:h-[250px] h-100 w-full "
      : category === "men's clothing"
      ? "row-span-1 md:row-span-2 col-span-1 md:col-span-2 max-sm:h-[250px] h-100 w-full "
      : " col-span-1 max-sm:h-[250px] h-80 w-full";
  }
  return (
    <Link 
      href={`/category/${category}`}
      className={`${handleClasses()}  relative  top-0 hover:top-[-8px]   category-card `}
    >
      <Image src={handleImages()} alt="" className="w-full h-full  rounded-3xl" />
      <div className="absolute top-7 left-0 text-[var(--main-color)] capitalize text-2xl text-center w-full ">
        <h3 className="py-3 px-1 md:px-3 rounded bg-slate-300 text-center text-lg sm:text-sm w-full font-bold lg:text-xl">{category}</h3>
      </div>
    </Link>
  );
}

export default CategoryCard;
