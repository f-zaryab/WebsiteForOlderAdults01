import React, { Suspense } from "react";
import EventsList from "@/components/events-list";

interface EventPageProps {
  searchParams: string;
}

const Event = async ({ searchParams }: EventPageProps) => {
  return (
    <main className="flex min-h-[80vh] items-center justify-between p-24 relative">
      <div>Side filters</div>
      <Suspense>
        <EventsList searchPar={searchParams} />
      </Suspense>
    </main>
  );
};

export default Event;
