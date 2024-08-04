import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import EventDetails from "@/components/event-details";
import { Button } from "@/components/ui/button";
import gqlFetchSpecificEvent from "@/calls/fetchSpecificEvt";

const EventDetailPage = async ({ params }: any) => {
  const result = await gqlFetchSpecificEvent(params?.slug);
  const { event } = result?.data;

  const transformedData = new Date(event?.dateTime).toLocaleString()

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-between p-24 relative">
      <div className="flex flex-col items-start text-black text-lrg">
        <div>
          <Image
            src={event?.imageUrl}
            alt="travel-image"
            sizes="100vw"
            priority
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "0.25rem",
            }}
            // className="group-hover:scale-125 transition-transform duration-300"
          />
        </div>
        <h1 className="text-black">{event?.title}</h1>
        <p>{event?.description}</p>
        <p className="my-8">{transformedData.toString()}</p>

        <Button asChild variant="outline" className="my-12 p-8">
          <Link href={event?.eventUrl} target="_blank">Link to ticket purchase</Link>
        </Button>
      </div>
    </main>
  );
};

export default EventDetailPage;
