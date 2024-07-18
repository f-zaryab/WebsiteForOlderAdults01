import React from "react";

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
    <div className="text-green-600">
      <h2>SearchParams:{searchValue}</h2>
      <div>
        {responseEvents.map((event: any) => (
          <div
            key={event?.name}
            className="flex justify-start items-center gap-4 border border-blue-400 bg-green-300 my-4 p-8"
          >
            <p className="text-blue-600">{event?.name}</p>
            <p>{event?.description?.slice(0, 25) || event?.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
