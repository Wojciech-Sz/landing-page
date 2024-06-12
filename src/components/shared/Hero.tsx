import React from "react";

const Hero = () => {
  return (
    <div
      className="relative flex h-[90vh] w-full items-center justify-center bg-blend-multiply"
      style={{
        backgroundImage: `url(/assets/images/house-outside.jpg)`,
        backgroundSize: "100vw 100vh",
        backgroundColor: "#cccccc",
      }}
    >
      <div className="mt-20 flex max-w-[50rem] flex-col text-center">
        <h1 className="mb-10 text-5xl font-bold uppercase text-white">
          Twój wymarzony dom
        </h1>

        <p className="text-wrap text-3xl font-semibold text-white">
          Projektujemy funkcjonalne i stylowe domy oraz
          budynki usługowe dostosowane do Twoich potrzeb.
        </p>
      </div>
    </div>
  );
};

export default Hero;
