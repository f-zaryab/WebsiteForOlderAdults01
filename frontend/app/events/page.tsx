import React, { Suspense } from "react";
import EventsList from "@/components/events-list";

interface EventPageProps {
  searchParams: {
    search?: string;
    page?: string;
  };
}

const Event = async ({ searchParams }: EventPageProps) => {
  console.log("SearchParams: ", searchParams);

  return (
    <main className="container mx-auto flex min-h-[80vh] items-center justify-between p-24 relative">
      <div className="max-w-screen-lg flex flex-wrap items-start">
        <div className="w-3/12">
          <h1 className="text-black">Side Filters</h1>
        </div>
        <div className="w-9/12">
          <Suspense fallback={<p>Loading...</p>}>
            <EventsList
              searchKeyword={searchParams?.search}
              pageNo={searchParams?.page}
            />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Event;
