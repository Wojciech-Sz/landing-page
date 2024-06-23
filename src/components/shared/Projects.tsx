import { projects } from "@/constans";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-gradient-to-b from-[#f0f8ff] to-white py-12  md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="mb-10 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nasze Projekty
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Spójrz na nasze najnowsze prace.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              >
                <Link
                  href={project.href}
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View</span>
                </Link>
                <Image
                  src={project.image}
                  alt={project.label}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover"
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="text-center text-xl font-bold">
                    {project.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
