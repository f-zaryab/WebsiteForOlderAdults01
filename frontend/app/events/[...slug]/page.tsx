// Src
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
// lib
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BackButton from "@/components/back-button";
import EventMiniCard from "@/components/event-mini-card";
import EventOrganizerCard from "@/components/event-organizer-card";
import NavigationBreadcrumbs from "@/components/navigation-breadcrumbs";
import gqlFetchSpecificEvent from "@/calls/fetchSpecificEvt";

export const metadata: Metadata = {
  title: "Social Connections: Searched Events Detail",
  description:
    "Social Connections: All the details related to event",
};

const EventDetailPage = async ({ params }: any) => {
  const result = await gqlFetchSpecificEvent(params?.slug);
  const { event } = result?.data;

  const transformedData = new Date(event?.dateTime).toLocaleString();

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-between p-24 relative">
      <div className="flex flex-col items-start text-black text-lrg">
        {/* ---- Back Button ---- */}
        <div className="flex flex-wrap justify-start items-center gap-16 mb-4">
          <Suspense fallback={<p>Loading...</p>}>
            <BackButton />
          </Suspense>

          <div>
            <NavigationBreadcrumbs />
          </div>
        </div>

        {/* ---------------------------------- Centeral Image ----------------------------------------------- */}
        <div className="w-full md:w-3/5 mx-auto h-auto">
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

        <Separator className="my-4" />

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-3 md:col-span-1">
            {/* ---- Badges ---- */}
            <div className="flex flex-wrap gap-1 md:gap-4 ">
              <Badge
                variant="secondary"
                className="cursor-default my-1 md:my-4 bg-slate-700"
              >
                {event?.eventType}
              </Badge>
              <Badge
                variant="secondary"
                className="cursor-default my-1 md:my-4 bg-slate-500"
              >
                EVENT {event?.timeStatus}
              </Badge>
            </div>

            {/* ---- Price ---- */}
            {event?.feeSettings ? (
              <p className="my-8">
                Price: starting from &#163; {event?.feeSettings?.amount}
              </p>
            ) : null}

            {/* ---- Participants ---- */}
            {Number(event?.going) > 0 ? (
              <p className="my-4">{event?.going} participants going</p>
            ) : null}

            {/* ---- Date, Time and Venue ---- */}
            <div>Date and Time: {transformedData.split(",")[0].toString()}</div>
            <div>Time: {transformedData.split(",")[1].toString()}</div>
            {event?.venue?.address ? (
              <div className="my-8">
                <p>{`${event?.venue?.address}, ${event?.venue?.city}, ${event?.venue?.postalCode}`}</p>
              </div>
            ) : null}

            <Separator className="my-8" />

            {/* ---------------- Drawer Content ---------------- */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Other information</Button>
              </SheetTrigger>
              <SheetContent id="sheet-content" className="overflow-y-scroll">
                <SheetHeader>
                  <SheetTitle className="text-black">
                    More Information
                  </SheetTitle>

                  <div className="text-black">
                    {/* ---- Host Info ---- */}
                    {event?.hosts[0]?.name && (
                      <div className="my-4">
                        <EventOrganizerCard
                          name={event?.hosts[0]?.name}
                          img={event?.hosts[0]?.memberPhoto?.source}
                          otherEvents={event?.hosts[0]?.hostedEvents?.edges}
                        />
                      </div>
                    )}

                    {event?.hosts[0]?.name &&
                      event?.topics?.edges.length > 0 && (
                        <Separator className="my-4" />
                      )}

                    {/* ---- Tags ---- */}
                    {event?.topics?.edges.length > 0 && (
                      <div className="my-4">
                        <p>Related Topics: </p>
                        <div className="flex flex-wrap gap-2 my-4">
                          {event?.topics?.edges?.map((topic: any) => (
                            <EventMiniCard
                              key={topic?.node?.id}
                              title={topic?.node?.name}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          {/* ------------------------ Description -------------------------- */}
          <div className="col-span-3 md:col-span-2">
            {event?.description ? (
              <ReactMarkdown>{event?.description}</ReactMarkdown>
            ) : (
              <p>Sorry, no description available for this event.</p>
            )}
          </div>
        </div>

        <Separator className="my-8" />

        {/* ---------------------- Buttons: Back-Btn && Org-Link-Btn ---------------------- */}
        <div className="flex flex-wrap justify-start items-center gap-1 md:gap-4">
          <Suspense fallback={<p>Loading...</p>}>
            <BackButton />
          </Suspense>

          <Button asChild variant="outline" className="my-12 p-8">
            <Link href={event?.eventUrl} target="_blank">
              Link to ticket purchase
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default EventDetailPage;
