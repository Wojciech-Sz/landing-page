/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { coop, team } from "@/constans";
import { CheckIcon } from "../Icons";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="mb-10 space-y-4 text-center">
            <h2 className="mb-10 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              O Nas
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Jesteśmy zespołem doświadczonych architektów z
              pasją do tworzenia wyjątkowych przestrzeni.
              Każdy projekt jest dla nas unikalnym
              wyzwaniem, które realizujemy z pełnym
              zaangażowaniem i dbałością o każdy detal.
              Wierzymy, że dobrze zaprojektowana przestrzeń
              może znacząco poprawić jakość życia, dlatego
              staramy się tworzyć projekty, które łączą
              estetykę z funkcjonalnością.
            </p>
          </div>
          <div className="flex  justify-around gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Zespół</h3>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                {team.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <CheckIcon className="size-5 shrink-0 text-gray-900 dark:text-gray-50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                Współprace
              </h3>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                {coop.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <CheckIcon className="size-5 shrink-0 text-gray-900 dark:text-gray-50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
