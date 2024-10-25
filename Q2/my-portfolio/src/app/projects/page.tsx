"use client";
import Heading from "@/components/heading";
import Project from "@/components/project";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center p-6 mt-10 gap-10">
      <Heading name="Projects" />

      <div className="flex flex-wrap gap-3">
        <Project
          title="Resume Builder"
          url="https://giaic-q2hackathon1-milestone5.vercel.app/"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at provident sit optio laboriosam autem delectus eius sequi modi sint!"
        />

        <Project
          title="Portfolio on MERN"
          url="https://toobtq.vercel.app/"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at provident sit optio laboriosam autem delectus eius sequi modi sint!"
        />
      </div>
    </div>
  );
}
