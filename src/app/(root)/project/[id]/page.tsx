import ProjectDetails from "@/components/shared/ProjectDetail";
import React from "react";

const Project = ({
  params,
}: {
  params: { id: number };
}) => {
  return (
    <section className="w-full py-14">
      <div className="container px-4 md:px-6">
        <ProjectDetails id={params.id} />
      </div>
    </section>
  );
};

export default Project;
