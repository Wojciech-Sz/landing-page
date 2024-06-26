import React from "react";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "../Icons";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-b from-[#f0f8ff] to-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Kontakt
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Skontaktuj się z naszym zespołem.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="order-2 space-y-4 text-center md:order-first md:text-left">
              <h3 className="text-2xl font-bold">
                Informacje Kontaktowe
              </h3>
              <div className="flex flex-col gap-1 space-y-1 text-lg max-md:items-center">
                <div className="flex items-center gap-2 text-gray-500 hover:text-gray-800 dark:text-gray-400">
                  <PhoneIcon className="size-5 shrink-0" />
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                    className=""
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 ">
                  <MailIcon className="size-5 shrink-0 " />
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                    className=""
                  >
                    info@acme.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <MapPinIcon className="size-5 shrink-0 " />
                  <p className="">
                    123 Main St, Anytown USA
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <ClockIcon className="size-5 shrink-0 " />
                  <div className="flex gap-2">
                    <p className="">pon - pt:</p>
                    <p className="">8:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
