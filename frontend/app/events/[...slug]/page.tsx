import React, { Suspense } from "react";
import EventDetails from "@/components/event-details";

const EventDetailPage = async ({ params }: any) => {
  console.log("Params: ", params.slug);

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-between p-24 relative">
      <h1 className="text-black">Event Detail page</h1>
      <Suspense>
        <EventDetails slug={params.slug} />
      </Suspense>
    </main>
  );
};

export default EventDetailPage;
