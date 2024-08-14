"use client";

import React from "react";
import { useUserData } from "@/app/UserDataContext";
import EventCard from "./event-card";

const EventsBookMarked = () => {
  const { state } = useUserData();

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-start items-start gap-8 text-black">
        {state?.events?.length > 0 ? (
          state?.events?.map((event: any) => (
            <div key={event?.index} className="h-[32rem]">
              <EventCard
                index={event?.index}
                title={event?.title}
                imageUrl={event?.imageUrl}
                description={event?.description}
                hrefUrl={`/events/${event?.index}`}
                isSaved={false} // integrate this when user data available
                tags={[]}
              />
            </div>
          ))
        ) : (
          <p>No events bookmarked</p>
        )}
      </div>
    </div>
  );
};

export default EventsBookMarked;
