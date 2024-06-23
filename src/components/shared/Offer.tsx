import React from "react";
import { offers } from "@/constans";

const Offer = () => {
  return (
    <section
      id="services"
      className="w-full  bg-gradient-to-b from-white to-[#f0f8ff] py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="mb-10 space-y-4 text-center">
            <h2 className="mb-10 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nasza Oferta
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sprawdź naszą kompleksową ofertę usług.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {offers.map((offer, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left"
              >
                {offer.icon}
                <div>
                  <h3 className="mb-4 text-xl font-bold">
                    {offer.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {offer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
