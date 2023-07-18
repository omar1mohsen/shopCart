import Image from "next/image";
import heroImage from "../assets/images/hero.png";
import Btn from "./Btn";

function Hero() {
  return (
    <main className="h-[60vh] w-100 mt-20 relative">
      <Image
        src={heroImage}
        loading="lazy"
        alt="Hero image"
        className="mr-4 w-full h-full"
      />
      <div className="hero-dec absolute top-9 left-4 md:top-16 md:left-10">
        <h1 className="text-[var(--main-color)] leading-normal tracking-wider	 font-bold text-3xl md:text-6xl ">
          Shopping and <br />
          Department Store{" "}
        </h1>
        <p className="text-[var(--sec-color)] font-semibold tracking-wider w-[90%] sm:w-[70%] my-8 md:text-lg">
          Shopping is bit of a relaxing hobby for me , which is sometimes
          troubling for bank balance{" "}
        </p>
        <Btn content=" Get Started" />
      </div>
    </main>
  );
}

export default Hero;
