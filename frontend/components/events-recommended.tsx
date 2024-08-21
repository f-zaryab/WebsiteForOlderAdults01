"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useUserData } from "@/app/UserDataContext";
import { getRecommendedEventsFetch } from "@/calls/recommededKeyword";
import EventCard from "./event-card";

const EventsRecommended = () => {
  const { state } = useUserData();

  const [data, setData] = useState([]);

  // Getting random string from the tags array
  // Tags array are saved in local storage along with event details when user bookmarks it
  // Keyword search is made on basis of that tag. These tags randomized
  const randomIndex = Math.floor(Math.random() * state?.tags?.length);
  const randomKeyword = state?.tags[randomIndex] || "popular";

  const fetchData = useCallback(async () => {
    const data = await getRecommendedEventsFetch(randomKeyword);

    setData(data.slice(0, 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div className="flex flex-wrap justify-start items-start gap-8 text-black">
        {data?.map((item: any) => {
          return (
            <div key={item?.node?.id} className="h-[32rem]">
              <EventCard
                index={item?.node?.id}
                title={item?.node?.result?.title}
                imageUrl={item?.node?.result?.imageUrl}
                description={item?.node?.result?.description}
                hrefUrl={`/events/${item?.node?.id}`}
                tags={[]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsRecommended;

/*
Dead Code for Reference: Not in use

<Button
    onClick={async () => {
        const updatedLikes = await getRecommendedEventsFetch("chess");
        setData(updatedLikes);
    }}
    >
        Generate content
</Button>
*/
