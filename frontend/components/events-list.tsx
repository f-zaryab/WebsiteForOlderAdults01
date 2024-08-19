import React from "react";
import { eventsPerPage } from "@/lib/constants";
import { Button } from "./ui/button";
import Paginations from "./pagination";
import EventCard from "./event-card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import CategoriesButton from "./categories-button";
import TooltipWrapper from "./tooltip-wrapper";
import gqlFetchAllEventOnKeyword from "@/calls/fetchAllEvtOnKeyword";

interface EventListProps {
  searchKeyword?: string;
  filterIsOnline?: string;
  filterTimeStatus?: string;
  filterSortField?: "RELEVANCE" | "DATETIME";
  pageNo?: string;
}

const EventsList = async ({
  searchKeyword,
  filterIsOnline,
  filterTimeStatus,
  filterSortField,
  pageNo,
}: EventListProps) => {
  // Fetching Data -----------------------------------------------
  const dataEvt = await gqlFetchAllEventOnKeyword(
    searchKeyword || "",
    filterSortField || "RELEVANCE"
  );
  let responseEvents = dataEvt?.data?.keywordSearch?.edges || [];

  // FILTERS ==============================================================
  // Is Event Online or not -----------------------------------------------
  if (filterIsOnline === "true") {
    console.log("in IF Block");
    responseEvents = responseEvents?.filter((item: any) => {
      return item?.node?.result?.eventType === "ONLINE";
    });
  } else if (filterIsOnline === "false") {
    console.log("in IF-ELSE Block");
    responseEvents = responseEvents?.filter((item: any) => {
      return item?.node?.result?.eventType !== "ONLINE";
    });
  }

  // Is Event Upcomging or Past
  if (filterTimeStatus) {
    responseEvents = responseEvents?.filter((item: any) => {
      return item?.node?.result?.timeStatus === filterTimeStatus;
    });
  }

  // Computing Page for Pagination -------------------------------
  const currentPage = Number(pageNo) || 1;
  const totalPages = Math.ceil(responseEvents.length / eventsPerPage);

  const paginatedEvents = responseEvents.slice(
    eventsPerPage * (currentPage - 1),
    eventsPerPage * currentPage
  );

  return (
    <div className="flex flex-col">
      <h2 className="text-black">Search Results:</h2>

      {/* --------------- Filters ---------------------------- */}
      <Sheet>
        <SheetTrigger asChild className="max-w-40 text-black" role="button">
          <TooltipWrapper tooltipMsg="You may filter your results by clicking this button named filters">
            <Button variant="outline" className="max-w-40 text-black">
              Filters
            </Button>
          </TooltipWrapper>
        </SheetTrigger>
        <SheetContent id="sheet-content" className="overflow-y-scroll">
          <SheetHeader>
            <SheetTitle className="text-black">Filters</SheetTitle>
            <div>
              <div className="flex justify-start items-center gap-4">
                <SheetClose asChild>
                  <CategoriesButton
                    href={`/events?search=${searchKeyword}&isOnline=true`}
                    label="Online"
                  />
                </SheetClose>
                <SheetClose asChild>
                  <CategoriesButton
                    href={`/events?search=${searchKeyword}&isOnline=false`}
                    label="Not Online"
                  />
                </SheetClose>
              </div>
              <Separator className="my-12" />
              <div className="flex justify-start items-center gap-4 my-4">
                <SheetClose asChild>
                  <CategoriesButton
                    href={`/events?search=${searchKeyword}&filterTimeStatus=UPCOMING`}
                    label="Upcoming Events"
                  />
                </SheetClose>
                <SheetClose asChild>
                  <CategoriesButton
                    href={`/events?search=${searchKeyword}&filterTimeStatus=ENDED`}
                    label="Past Events"
                  />
                </SheetClose>
              </div>
              <Separator className="my-12" />
              <div className="flex justify-start items-center gap-4 my-4">
                <SheetClose asChild>
                  <CategoriesButton
                    href={`/events?search=${searchKeyword}&filterSortField=DATETIME`}
                    label="Most Recent Events"
                  />
                </SheetClose>
                <SheetClose asChild>
                  <CategoriesButton
                    href={`/events?search=${searchKeyword}&filterSortField=RELEVANCE`}
                    label="More Relevant Events"
                  />
                </SheetClose>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* ------------------ Cards List ---------------------- */}
      <div className="flex flex-wrap justify-start items-start gap-8 my-4 py-8">
        {paginatedEvents?.length > 0 ? (
          paginatedEvents.map((event: any) => (
            <div key={event?.node?.id} className="h-[32rem]">
              <EventCard
                index={event?.node?.id}
                title={event?.node?.result?.title}
                imageUrl={event?.node?.result?.imageUrl}
                description={event?.node?.result?.description}
                hrefUrl={`/events/${event?.node?.id}`}
                tags={event?.node?.result?.topics?.edges}
              />
            </div>
          ))
        ) : (
          <p className="text-black">Sorry, no events found</p>
        )}
      </div>
      <div className="flex justify-start">
        <Paginations totalPages={totalPages} />
      </div>
    </div>
  );
};

export default EventsList;
