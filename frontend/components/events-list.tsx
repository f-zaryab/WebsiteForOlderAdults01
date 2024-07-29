import React from "react";
import PropertyCard from "./property-card";
import { eventsPerPage } from "@/lib/constants";
import Paginations from "./pagination";

interface EventListProps {
  searchKeyword?: string;
  pageNo?: string;
}

async function getData(par: string) {
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.TICKETMASTER_API_KEY}&keyword=${par}&locale=*`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data239");
  }

  const apiRes = res.json();

  return apiRes;
}

const EventsList = async ({ searchKeyword, pageNo }: EventListProps) => {
  // Fetching Data -----------------------------------------------
  const data = await getData(searchKeyword || "");

  const responseEvents = data?._embedded?.events || {};

  // Computing Page for Pagination -------------------------------
  const currentPage = Number(pageNo) || 1;
  const totalPages = Math.ceil(responseEvents.length / eventsPerPage);

  // console.log("totalPages: ", totalPages);
  // console.log("cureentPage: ", currentPage);

  const paginatedEvents = responseEvents.slice(
    eventsPerPage * (currentPage - 1),
    eventsPerPage * currentPage
  );

  return (
    <div className="text-green-300">
      {searchKeyword ? (
        <h2>Search Results for :{searchKeyword}</h2>
      ) : (
        <h2>Search Results:</h2>
      )}
      <div className="flex flex-wrap justify-start items-start gap-8 my-4 p-8">
        {paginatedEvents.map((event: any) => (
          <div key={event?.name} className="h-full">
            {/* <p className="text-blue-600">{event?.name}</p>
            <p>{event?.description?.slice(0, 25) || event?.info}</p> */}
            <PropertyCard
              title={event?.name}
              description={
                event?.description?.slice(0, 10) || event?.info?.slice(0, 10)
              }
              hrefUrl={`/events/${event?.id}`}
            />
          </div>
        ))}

        <div>
          <Paginations totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default EventsList;
