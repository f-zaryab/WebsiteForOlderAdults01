import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="relative h-full w-full z-0">
      <div>
        <div className="h-[30rem]">
          <Image
            src={"/heroBanner01.jpg"}
            alt="travel-image"
            sizes="100vw"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="absolute top-16 md:top-16 right-16 md:right-32 w-64 h-96 p-8 border-solid border-8 border-sky-500 bg-slate-100 rounded-md">
          Form here
        </div>
      </div>
      <div className="hidden">
        <div className="flex justify-center items-center gap-4">
          <div className="w-full md:w-40 h-40 bg-red-500 p-4">
            <Link href="/events" className="w-full h-full flex items-end">
              <p className="text-lg font-bold">Popular Events</p>
            </Link>
          </div>
          <div className=" w-full md:w-40 h-40 bg-orange-500 p-4">
            <Link href="/events" className="w-full h-full flex items-end">
              <p className="text-lg font-bold">Random Events</p>
            </Link>
          </div>
          <div className="w-full md:col-span-2 h-40 bg-green-500 p-4">
            <Link href="/events" className="w-full h-full flex items-end">
              <p className="text-lg font-bold">Recent Events</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
