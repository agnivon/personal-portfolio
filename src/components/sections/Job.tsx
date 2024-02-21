import { Variant } from "@/constants/framer.constants";
import type { JobType } from "@/types";
import Image from "next/image";
import MotionDiv from "../framer/MotionDiv";
import MotionSection from "../framer/MotionSection";

export default async function Job({ job }: { job: JobType[] }) {
  return (
    <MotionSection
      className="mt-32"
      initial="hidden"
      animate="visible"
      variants={Variant.FADE}
    >
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Work Experience</h2>
      </div>

      <MotionDiv className="flex flex-col gap-y-12" variants={Variant.FADE}>
        {job.map((data) => (
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            variants={Variant.FADE_SLIDE_LEFT}
            key={data._id}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
          >
            <a
              href={data.url}
              rel="noreferrer noopener"
              className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
            >
              <Image
                src={data.logo}
                className="object-cover"
                alt={`${data.name} logo`}
                fill
              />
            </a>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{data.name}</h3>
              <p>{data.jobTitle}</p>
              <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                {data.startDate.toString()} - {data.endDate.toString()}
              </small>
              <p className="text-base text-zinc-400 my-4">{data.description}</p>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </MotionSection>
  );
}
