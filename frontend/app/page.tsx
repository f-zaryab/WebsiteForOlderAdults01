import type { Metadata } from "next";
import HeroBanner from "@/components/hero-banner";
import HeroBannerSecond from "@/components/hero-banner-sec";
import CategoriesButton from "@/components/categories-button";
import { eventCategories } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Social Connections: Search",
  description: "Social Connections: Search what type of event you want",
};

export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-between p-24 relative">
      {/* ---------------- HeroBanner Section ----------------------- */}
      {/* <HeroBanner /> */}
      <HeroBannerSecond />
      {/* ---------------- Categories Section ----------------------- */}
      {/* <section id="categories" className="flex flex-wrap justify-start items-center gap-8 bg-sky-900 w-full p-8">
        <div>
          <h2>Find what you are looking for</h2>
          <p>Select categories and we would find best events for you</p>
        </div>
        {eventCategories.map((event) => (
          <CategoriesButton
            key={event.id}
            label={event.label}
            href={event.href}
          />
        ))}
      </section> */}
    </main>
  );
}
