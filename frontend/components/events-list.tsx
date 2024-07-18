import React from "react";
import PropertyCard from "./property-card";

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

const EventsList = async ({ searchPar }: any) => {
  const searchValue = searchPar?.search;

  const data = await getData(searchValue);

  const responseEvents = data?._embedded?.events || {};

  return (
    <div className="text-green-300">
      {searchValue ? (
        <h2>Search Results for :{searchValue}</h2>
      ) : (
        <h2>Search Results:</h2>
      )}
      <div className="flex flex-wrap justify-start items-start gap-8 my-4 p-8">
        {responseEvents.map((event: any) => (
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
      </div>
    </div>
  );
};

export default EventsList;
