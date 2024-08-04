import React from "react";
import EventCard from "./event-card";
import { eventsPerPage } from "@/lib/constants";
import Paginations from "./pagination";
import gqlFetchAllEventOnKeyword from "@/calls/fetchAllEvtOnKeyword";

interface EventListProps {
  searchKeyword?: string;
  pageNo?: string;
}

const EventsList = async ({ searchKeyword, pageNo }: EventListProps) => {
  // Fetching Data -----------------------------------------------
  const dataEvt = await gqlFetchAllEventOnKeyword(searchKeyword || "");
  const responseEvents = dataEvt?.data?.keywordSearch?.edges || [];

  // Computing Page for Pagination -------------------------------
  const currentPage = Number(pageNo) || 1;
  const totalPages = Math.ceil(responseEvents.length / eventsPerPage);

  const paginatedEvents = responseEvents.slice(
    eventsPerPage * (currentPage - 1),
    eventsPerPage * currentPage
  );

  return (
    <div className="flex flex-col">
      {searchKeyword ? (
        <h2>Search Results for :{searchKeyword}</h2>
      ) : (
        <h2>Search Results:</h2>
      )}
      <div className="flex flex-wrap justify-start items-start gap-8 my-4 p-8">
        {paginatedEvents.map((event: any) => (
          <div key={event?.node?.id} className="h-[32rem]">
            <EventCard
              title={event?.node?.result?.title}
              imageUrl={event?.node?.result?.imageUrl}
              description={event?.node?.result?.description}
              hrefUrl={`/events/${event?.node?.id}`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-start">
        <Paginations totalPages={totalPages} />
      </div>
    </div>
  );
};

export default EventsList;
