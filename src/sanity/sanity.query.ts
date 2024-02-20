import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
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
  return client.fetch(
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
  return client.fetch(
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
  return client.fetch(
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
