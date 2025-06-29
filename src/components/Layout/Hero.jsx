import React from "react";
import heroImg from "../../assets/shoppy-hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Shoppy"
        className="h-[400px] w-full object-cover md:h-[600px] lg:h-[750px]"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-[#00000060]">
        <div className="p-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tighter uppercase md:text-9xl">
            vacation <br />
            Ready
          </h1>
          <p className="mb-6 text-sm tracking-widest md:text-lg">
            Shop like a king, save like a boss — only here, full on!
          </p>
          <Link
            to=""
            className="hover:bg-steel-blue rounded-sm bg-white px-6 py-2 text-lg text-gray-950 transition-all hover:text-white"
          >
            Shop Now!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
