import { Variant } from "@/constants/framer.constants";
import { ProfileType } from "@/types";
import Image from "next/image";
import TypeAnimation from "../TypeAnimation";
import MotionA from "../framer/MotionA";
import MotionDiv from "../framer/MotionDiv";

const Placeholder = () => <span className="invisible">P</span>;

export default function OtherProfiles({
  otherProfileLinks,
}: {
  otherProfileLinks: ProfileType["otherProfileLinks"];
}) {
  return (
    <section className="mt-32" id="other-profiles">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">
          <TypeAnimation
            sequence={["Other Profiles"]}
            wrapper="span"
            cursor={false}
            speed={40}
          />
          <Placeholder />
        </h2>
      </div>
      <MotionDiv
        className="grid grid-cols-4 sm:max-md:grid-cols-5 place-items-center lg:gap-8 gap-6 max-w-2xl"
        variants={Variant.FADE}
        initial="hidden"
        animate="visible"
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
    </section>
  );
}
