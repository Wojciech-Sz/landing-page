import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { coop } from "@/constans";

const Partners = () => {
  return (
    <section className="w-full py-12  md:py-24 lg:py-32">
      <div className="container flex flex-col items-center px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Współprace
          </h2>
          <p className="max-w-[40rem] text-xl text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
            We are proud to work with leading companies in
            the architecture and construction industries.
          </p>
        </div>
        <Carousel
          opts={{ loop: true }}
          className="mt-8 w-full max-w-3xl"
        >
          <CarouselContent>
            {coop.map((item) => (
              <CarouselItem
                key={item.name}
                className="basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Image
                    src="/assets/icons/yourlogo.svg"
                    width="140"
                    height="70"
                    alt="Partner Logo"
                    className="w-full overflow-hidden rounded-lg bg-black object-contain object-center px-2 py-4 grayscale "
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
