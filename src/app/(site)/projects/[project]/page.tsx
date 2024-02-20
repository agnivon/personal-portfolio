import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import fallBackImage from "../../../../../public/project.png";

type Props = {
  params: {
    project: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    openGraph: {
      images: project.screenshots?.map((sc) => sc.image),
      title: project.name,
      description: project.tagline,
    },
  };
}

export const dynamic = "force-dynamic";

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {project.name}
          </h1>

          <div className="mt-2.5 flex items-center gap-4">
            <a
              href={project.projectUrl || ""}
              rel="noreferrer noopener"
              target="_blank"
              className="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2 flex items-center"
            >
              <FaExternalLinkAlt className="h-3.5 w-3.5 mr-2" />
              Visit
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                rel="noreferrer noopener"
                target="_blank"
                className="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2 flex items-center"
              >
                <FaGithub className="h-3.5 w-3.5 mr-2" />
                Github
              </a>
            )}
          </div>
        </div>

        {project.screenshots && project.screenshots.length > 0 ? (
          <Carousel className="text-foreground">
            <CarouselContent>
              {project.screenshots?.map((sc) => {
                return (
                  <CarouselItem key={sc.alt}>
                    <Image
                      className="rounded-xl border border-zinc-800"
                      width={900}
                      height={460}
                      src={sc.image || fallBackImage}
                      alt={sc.alt || project.name}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <Image
            className="rounded-xl border border-zinc-800"
            width={900}
            height={460}
            src={project.coverImage?.image || fallBackImage}
            alt={project.coverImage?.alt || project.name}
          />
        )}

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <PortableText value={project.description} />
        </div>
      </div>
    </main>
  );
}
