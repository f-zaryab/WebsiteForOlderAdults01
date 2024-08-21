/*
SITEMAP PAGE
a page displaying all the main active pages

Next-Image: https://nextjs.org/docs/app/api-reference/components/image
*/

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Connections: Sitemap",
  description: "Social Connections: sitemap",
};

const Sitemap = () => {
  return (
    <main className="flex min-h-[80vh] flex-wrap gap-8 items-center justify-start p-24">
      <div className="flex flex-col justify-start items-start gap-1 w-full">
        <h1 className="text-black text-3xl" id="our-story">
          Sitemap
        </h1>
        <div className="flex flex-col items-start justify-start p-4 text-lrg text-black border-2 border-navbarFooterBG rounded-lg w-full">
          <Link href="/" className="my-4">
            Home page
          </Link>
          <Link href="/about" className="my-4">
            About page
          </Link>
          <Link href="/events" className="my-4">
            Events page
          </Link>
          <Link href="/myevents" className="my-4">
            My events page
          </Link>
          <Link href="/blogs" className="my-4">
            Blogs page
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Sitemap;
