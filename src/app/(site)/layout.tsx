import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { ProfileType } from "@/types";
import { getProfile } from "@/sanity/sanity.query";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const profile: ProfileType[] = await getProfile();

  return {
    title: "Agnivo Neogi's Portfolio",
    description: profile[0].shortBio,
    keywords: [
      "Agnivo Neogi",
      "Agnivo Neogi website",
      "Agnivo Neogi portfolio",
    ],
    authors: [
      {
        name: "Agnivo Neogi",
        url: "https://www.agnivon.com",
      },
    ],
    creator: "Agnivo Neogi",
    openGraph: {
      title: "Agnivo Neogi's Portfolio",
      description: profile[0].shortBio,
      url: "https://www.agnivon.com",
      siteName: "Agnivo Neogi's Portfolio",
      images: [
        {
          ...profile[0].profileImage,
          url: profile[0].profileImage.image,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Agnivo Neogi's Portfolio",
      description: profile[0].shortBio,
      images: [
        {
          ...profile[0].profileImage,
          url: profile[0].profileImage.image,
        },
      ],
      creator: "Agnivo Neogi",
    },
    icons: {
      icon: "https://www.agnivon.com/favicon.ico",
      shortcut: "https://www.agnivon.com/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
