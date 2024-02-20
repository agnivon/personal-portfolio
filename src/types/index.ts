import { PortableTextBlock } from "sanity";

type ImageType = {
  alt: string;
  image: string;
};

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: ImageType;
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
  otherProfileLinks: {
    name: string;
    logo: ImageType;
    link: string;
  }[];
  skills: string[];
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: Date;
  endDate: Date;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  githubUrl: string;
  logo: string;
  coverImage: ImageType;
  screenshots: ImageType[];
  description: PortableTextBlock[];
};
