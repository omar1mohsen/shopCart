import React, { ReactNode } from "react";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
function RatingComponent({ rating, count }: { rating: number; count: number }) {
  const stars: any = [];
  const handleStars = () => {
    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((rating - i).toFixed(1));
      if (difference > 0) stars.push("full");
      else if (difference < 0) {
        stars.push("empty");
      }
    }
  };
  return (
    <div className="my- 3 w-full flex items-center">
      <div className="flex space-x-1">
        {handleStars()}
        {stars.map((star: string) => {
          return star == "full" ? (
            <AiTwotoneStar className="text-[var(--sec-color)] h-3 w-3" />
          ) : (
            <AiOutlineStar className="text-[var(--sec-color)] h-3 w-3" />
          );
        })}
      </div>
      <span className="text-xs md:text-lg font-semibold mx-1 text-slate-400">
        ( {count} )
      </span>
    </div>
  );
}

export default RatingComponent;
