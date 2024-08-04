// Data fetching from Ticket-Master API: Not currently in use

const tmGetAllEventsKeyword = async (par: string) => {
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.TICKETMASTER_API_KEY}&keyword=${par}&locale=*`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data239");
  }

  const apiRes = res.json();

  return apiRes;
};

export default tmGetAllEventsKeyword;
