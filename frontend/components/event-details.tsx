import React from "react";

interface EventDetailsProps {
  slug: string;
}

async function getData(par: string) {
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events/${par}?apikey=${process.env.TICKETMASTER_API_KEY}&locale=*`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data239");
  }

  const apiRes = await res.json();

  return apiRes;
}

const EventDetails = async ({ slug }: EventDetailsProps) => {
  const data = await getData(slug);

  const event = data || {};

  return (
    <section>
      <div>
        <h1 className="text-black">Event Name: {event?.name}</h1>
      </div>
    </section>
  );
};

export default EventDetails;
