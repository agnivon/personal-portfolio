import Hero from "@/components/sections/Hero";
import Job from "@/components/sections/Job";
import OtherProfiles from "@/components/sections/OtherProfiles";
import { getJob, getProfile } from "@/sanity/sanity.query";
import type { JobType, ProfileType } from "@/types";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const profile: ProfileType[] = await getProfile();
  const job: JobType[] = await getJob();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <Hero profile={profile} />
      <div className="flex max-md:flex-col justify-between gap-x-6">
        <Job job={job} />
        <OtherProfiles otherProfileLinks={profile[0].otherProfileLinks} />
      </div>
    </main>
  );
}
