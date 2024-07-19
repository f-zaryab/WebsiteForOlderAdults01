import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="flex min-h-[80vh] flex-wrap gap-8 items-center justify-between p-24">
      <div className="hidden md:block relative w-full">
        <div className="w-full h-full">
          <Image
            src={"/herobanner02.jpg"}
            alt="travel-image"
            sizes="100vw"
            priority
            width={0}
            height={0}
            style={{
              width: "36rem",
              height: "auto",
              objectFit: "contain",
              borderRadius: "1.5rem",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-1">
        <h1 className="text-black" id="our-story">
          Our story
        </h1>
        <p className="text-black">
          I love socializing with people but since moving cities, I have
          struggled to find opportunities to connect with like-minded people.
          So, I envisioned an events platform with activities ranging from
          wine-tasting and outdoor adventures to art workshops and intellectual
          seminars. The idea is to encourage meeting new people, trying new
          experiences, and creating lasting memories.
        </p>
      </div>
    </section>
  );
};

export default About;
