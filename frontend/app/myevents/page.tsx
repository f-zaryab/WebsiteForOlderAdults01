import React from "react";
import EventsBookMarked from "@/components/events-bookmarked";
import EventsRecommended from "@/components/events-recommended";

const MyEventsPage = () => {
  return (
    <main className="flex min-h-[80vh] flex-col items-start justify-between p-24">
      <div>
        <h1 className="text-black">My Bookmarked Events: </h1>
        <EventsBookMarked />
        <h2 className="text-black mt-16 mb-4">Recommended Events for you: </h2>
        <EventsRecommended />
      </div>
    </main>
  );
};

export default MyEventsPage;
