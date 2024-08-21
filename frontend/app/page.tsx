import type { Metadata } from "next";
import HeroBannerSecond from "@/components/hero-banner-sec";
import CategoriesButton from "@/components/categories-button";
import { eventCategories } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Social Connections: Search",
  description: "Social Connections: Search what type of event you want",
};

// Legacy commented code: Kept here for future reference purpose
// async function getData() {
//   const res = await fetch(
//     `https://www.eventbriteapi.com/v3/categories/?token=${process.env.EVENTBRITE_API_KEY}`
//   );

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   const apiRes = res.json();

//   return apiRes;
// }

// async function localApiGET() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/test`);

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   const apiRes = res.json();

//   return apiRes;
// }

// async function localApiPOST() {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/test`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch data123");
//     }

//     return res.json();
//   } catch (e) {
//     return {};
//   }
// }

export default async function Home() {
  return (
    <>
      {/* Main Hero Banner */}
      <main className="flex min-h-[80vh] flex-col items-center justify-between p-24 relative">
        {/* ---------------- HeroBanner Section ----------------------- */}
        {/* <HeroBanner /> */}
        <HeroBannerSecond />
      </main>

      {/* ---------------------- Categories of Events --------------------- */}
      <aside
        id="categories"
        className="flex flex-wrap flex-col justify-start items-center gap-8 bg-themeBG/90 w-full p-8"
      >
        <div>
          <h2 className="text-black">Find what you are looking for</h2>
          <p className="text-black">
            Select categories and we would find best events for you
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4">
          {eventCategories?.map((event: any) => (
            <CategoriesButton
              key={event.id}
              label={event.label}
              href={event.href}
            />
          ))}
        </div>
      </aside>
    </>
  );
}
