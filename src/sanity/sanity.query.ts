import { groq } from "next-sanity";
import client from "./sanity.client";
import { JobType, ProfileType, ProjectType } from "@/types";

export async function getProfile() {
  return client.fetch<ProfileType[]>(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage { alt, "image": asset->url },
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      otherProfileLinks[] { name, link, "logo": logo { alt, "image": asset->url } },
      skills
    }`
  );
}

export async function getProfileCount() {
  return client.fetch<number>(`count(*[_type == "profile"])`);
}

export async function getJob() {
  return client.fetch<JobType[]>(
    groq`*[_type == "job"] | order(startDate desc){
        _id,
        name,
        jobTitle,
        "logo": logo.asset->url,
        url,
        description,
        startDate,
        endDate,
      }`
  );
}

export async function getProjects() {
  return client.fetch<ProjectType[]>(
    groq`*[_type == "project"] | order(createdAt desc) {
        _id, 
        name,
        "slug": slug.current,
        tagline,
        "logo": logo.asset->url,
      }`
  );
}

export async function getSingleProject(slug: string) {
  return client.fetch<ProjectType>(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        name,
        projectUrl,
        githubUrl,
        coverImage { alt, "image": asset->url },
        screenshots[] { alt, "image": asset->url },
        tagline,
        description
      }`,
    { slug }
  );
}
