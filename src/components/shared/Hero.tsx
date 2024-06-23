import React from "react";

const Hero = () => {
  return (
    <section
      className="flex h-[90vh] w-full items-center justify-center bg-blend-multiply"
      style={{
        backgroundImage: `url(/assets/images/house-outside.jpg)`,
        backgroundSize: "100vw 100vh",
        backgroundColor: "#cccccc",
        backgroundPosition: "center center",
      }}
    >
      <div className="container mt-20 flex w-full flex-col items-center justify-center px-4 text-center md:px-6">
        <h1 className="mb-10 max-w-[60rem] text-balance text-5xl font-bold uppercase tracking-tighter text-gray-100 sm:text-6xl lg:text-pretty xl:text-7xl/none ">
          Twój wymarzony dom
        </h1>

        <p className="max-w-[50rem] text-pretty text-xl font-semibold text-gray-200 md:text-2xl">
          Projektujemy funkcjonalne i stylowe domy oraz
          budynki usługowe dostosowane do Twoich potrzeb.
        </p>
      </div>
    </section>
  );
};

export default Hero;
