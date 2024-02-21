import { ProfileType } from "@/types";
import Image from "next/image";
import MotionDiv from "../framer/MotionDiv";
import { Variant } from "@/constants/framer.constants";
import MotionA from "../framer/MotionA";
import MotionSection from "../framer/MotionSection";

export default function OtherProfiles({
  otherProfileLinks,
}: {
  otherProfileLinks: ProfileType["otherProfileLinks"];
}) {
  return (
    <MotionSection
      className="mt-32"
      initial="hidden"
      animate="visible"
      variants={Variant.FADE}
    >
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Other Profiles</h2>
      </div>
      <MotionDiv
        className="grid grid-cols-4 sm:max-md:grid-cols-5 place-items-center lg:gap-8 gap-6 max-w-2xl"
        variants={Variant.FADE}
      >
        {otherProfileLinks.map((link) => {
          return (
            <MotionA
              key={link.name}
              href={link.link}
              target="blank"
              rel="noreferrer noopener"
              className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
              variants={Variant.FADE}
            >
              <Image
                src={link.logo.image}
                className="object-cover"
                alt={`${link.name} logo`}
                fill
              />
            </MotionA>
          );
        })}
      </MotionDiv>
    </MotionSection>
  );
}
