import type { JobType } from "@/types";
import Image from "next/image";
import TypeAnimation from "../TypeAnimation";

const Placeholder = () => <span className="invisible">P</span>;

export default async function Job({ job }: { job: JobType[] }) {
  return (
    <div className="mt-32" id="work-experience">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">
          <TypeAnimation
            sequence={["Work Experience"]}
            wrapper="span"
            cursor={false}
            speed={40}
          />
          <Placeholder />
        </h2>
      </div>

      <div className="flex flex-col gap-y-12">
        {job.map((data) => (
          <div
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
              <h3 className="text-xl font-bold">
                <TypeAnimation
                  sequence={[data.name]}
                  wrapper="span"
                  cursor={false}
                  speed={30}
                />
                <Placeholder />
              </h3>
              <p>
                <TypeAnimation
                  sequence={[data.jobTitle]}
                  wrapper="span"
                  cursor={false}
                  speed={30}
                />
                <Placeholder />
              </p>
              <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase inline-block">
                <TypeAnimation
                  sequence={[
                    `${data.startDate.toString()} - ${data.endDate.toString()}`,
                  ]}
                  wrapper="span"
                  cursor={false}
                  speed={30}
                />
                <Placeholder />
              </small>
              <p className="text-base text-zinc-400 my-4">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
