import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/blogs";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Social Connections: Blogs",
  description:
    "Social Connections: blogs are here to let you know buzz around latest events",
};

const Blogs = () => {
  return (
    <main className="flex min-h-[80vh] flex-wrap gap-8 items-center justify-start p-24">
      <div className="flex flex-col justify-start items-start gap-1 w-full">
        <h1 className="text-black text-3xl" id="our-story">
          Blogs
        </h1>

        <Separator className="my-8" />

        <div className="flex flex-col items-start justify-start px-4 py-1 text-lrg text-black w-full">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="border-2 border-navbarFooterBG rounded-lg px-12 py-10 my-4 min-w-fit"
            >
              <>
                <div className="h-auto w-full overflow-hidden">
                  <Image
                    src={"/heroBanner01.jpg"}
                    alt="blog-image"
                    sizes="100vw"
                    priority
                    width={0}
                    height={0}
                    style={{
                      width: "36rem",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "0.25rem",
                    }}
                    className="group-hover:scale-125 transition-transform duration-300"
                  />
                </div>
                <p className="text-lrg mt-4">{blog.title}</p>
              </>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blogs;
