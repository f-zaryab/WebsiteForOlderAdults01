import React from "react";
import Image from "next/image";
import CategoriesButton from "@/components/categories-button";
import SearchBoxHeroBanner from "./search-herobanner";
import SearchBadge from "./seach-badge";
import { popularSearchOptions } from "@/lib/constants";

const HeroBannerThird = async () => {
  return (
    <section className="absolute top-0 left-0 w-full h-full z-0">
      <div className="h-full w-full center-component-alignment flex flex-col justify-center items-center">
        <div className="p-4 rounded-[0.25rem] bg-themeBG/75 flex flex-col items-center">
          {/* ----------- Title on Hero Banner ------------ */}
          <h1 className="text-black font-mono">
            Choose experiences that make you happy!
          </h1>

          {/* -------------- Search Box -------------------- */}
          <SearchBoxHeroBanner />

          {/* -------------- Search Pills ------------------ */}
          <div className="flex flex-wrap justify-center items-center gap-4 my-4">
            {popularSearchOptions.map((event) => (
              <SearchBadge
                label={event.label}
                hrefLink={event.href}
                key={event.id}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------- BG Image -------------------------- */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src={"/herobanner04.jpg"}
          alt="travel-image"
          sizes="100vw"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(1.5px)",
          }}
        />
      </div>
    </section>
  );
};

export default HeroBannerThird;
