"use client";

import React, { useEffect, useState } from "react";
import { useUserData } from "@/app/UserDataContext";
import EventCard from "./event-card";

const EventsBookMarked = () => {
  const { state } = useUserData();
  const [finalData, setFinalData] = useState({ events: [], tags: [] });

  useEffect(() => {
    const localStorageData = localStorage?.getItem("userData");
    const stateLS = localStorageData
      ? JSON.parse(localStorage.getItem("userData")!)
      : {};

    if (stateLS) {
      setFinalData(stateLS);

      return;
    }

    setFinalData(state);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-start items-start gap-8 text-black">
        {finalData?.events?.length > 0 ? (
          finalData?.events?.map((event: any) => (
            <div key={event?.index} className="h-[32rem]">
              <EventCard
                index={event?.index}
                title={event?.title}
                imageUrl={event?.imageUrl}
                description={event?.description}
                hrefUrl={`/events/${event?.index}`}
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
