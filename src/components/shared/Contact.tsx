import React from "react";
import { MailIcon, MapPinIcon, PhoneIcon } from "../Icons";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Us
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get in touch with our team to discuss your
              project.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  Contact Information
                </h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="size-5 shrink-0 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-500 dark:text-gray-400">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="size-5 shrink-0 text-gray-500 dark:text-gray-400" />
                    <a
                      href="mailto:w.szczygielski00@gmail.com"
                      className="text-gray-500 dark:text-gray-400"
                    >
                      info@acme.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="size-5 shrink-0 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-500 dark:text-gray-400">
                      123 Main St, Anytown USA
                    </span>
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
