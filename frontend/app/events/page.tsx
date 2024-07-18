import React, { Suspense } from "react";
import EventsList from "@/components/events-list";

interface EventPageProps {
  searchParams: string;
}

const Event = async ({ searchParams }: EventPageProps) => {
  return (
    <main className="flex min-h-[80vh] items-center justify-between p-24 relative">
      <div className="max-w-screen-lg flex flex-wrap items-start">
        <div className="w-3/12">
          <h1 className="text-black">Side Filters</h1>
        </div>
        <div className="w-9/12">
          <Suspense>
            <EventsList searchPar={searchParams} />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Event;
