/*
My Events PAGE
The personlised page which shows bookmarked events and recommended events for the user
*/

import React from "react";
import type { Metadata } from "next";
import EventsBookMarked from "@/components/events-bookmarked";
import EventsRecommended from "@/components/events-recommended";
import NavigationBreadcrumbs from "@/components/navigation-breadcrumbs";

export const metadata: Metadata = {
  title: "Social Connections: My Events",
  description: "Social Connections: All your suitable events in one place",
};

const MyEventsPage = () => {
  return (
    <main className="flex min-h-[80vh] flex-col items-start justify-between p-24">
      <div>
        <div>
          <NavigationBreadcrumbs />
        </div>
        <h1 className="text-black">My Bookmarked Events: </h1>
        <EventsBookMarked />
        <h2 className="text-black mt-16 mb-4">Recommended Events for you: </h2>
        <EventsRecommended />
      </div>
    </main>
  );
};

export default MyEventsPage;
