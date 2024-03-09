import { Variant } from "@/constants/framer.constants";
import { ProfileType } from "@/types";
import TypeAnimation from "../TypeAnimation";
import MotionLi from "../framer/MotionLi";
import MotionSection from "../framer/MotionSection";
import MotionUl from "../framer/MotionUl";
import HeroSvg from "../icons/HeroSvg";

export default async function Hero({ profile }: { profile: ProfileType[] }) {
  return (
    <MotionSection
      className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16"
      initial="hidden"
      animate="visible"
      variants={Variant.FADE}
    >
      {profile &&
        profile.map((data) => (
          <div key={data._id} className="lg:max-w-2xl max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full h-28">
              <TypeAnimation
                sequence={[data.headline]}
                wrapper="span"
                cursor={false}
                speed={40}
                //repeat={Infinity}
              />
            </h1>
            <p className="text-base text-zinc-400 leading-relaxed">
              {data.shortBio}
            </p>
            <MotionUl
              className="flex items-center gap-x-6 my-10"
              variants={Variant.FADE}
            >
              {Object.entries(data.socialLinks)
                .sort()
                .filter(([_, value]) => Boolean(value))
                .map(([key, value], id) => (
                  <MotionLi key={id} variants={Variant.FADE}>
                    <a
                      href={value}
                      rel="noreferer noopener"
                      className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                    >
                      {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                    </a>
                  </MotionLi>
                ))}
            </MotionUl>
          </div>
        ))}
      <HeroSvg />
    </MotionSection>
  );
}
