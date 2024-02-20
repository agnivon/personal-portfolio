import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import MotionSection from "../framer/MotionSection";
import { Variant } from "@/constants/framer.constants";
import MotionDiv from "../framer/MotionDiv";

export default async function Project({
  projects,
}: {
  projects: ProjectType[];
}) {
  return (
    <MotionSection
      className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12"
      initial="hidden"
      animate="visible"
      variants={Variant.FADE}
    >
      {projects.map((project) => (
        <MotionDiv
          key={project._id}
          variants={Variant.FADE}
          className=" bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
        >
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-x-4"
          >
            <Image
              src={project.logo || ""}
              width={60}
              height={60}
              alt={project.name || "Project Logo"}
              className="bg-zinc-800 rounded-md p-2"
            />
            <div>
              <h2 className="font-semibold mb-1">{project.name}</h2>
              <div className="text-sm text-zinc-400 line-clamp-2">
                {project.tagline}
              </div>
            </div>
          </Link>
        </MotionDiv>
      ))}
    </MotionSection>
  );
}
