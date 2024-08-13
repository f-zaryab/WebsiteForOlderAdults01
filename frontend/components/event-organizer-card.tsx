"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface EventOrganizerCardProps {
  name: string;
  img: string;
  otherEvents: {
    id: string;
    name: string;
  }[];
}

const EventOrganizerCard = ({
  name,
  img,
  otherEvents,
}: EventOrganizerCardProps) => {
  const router = useRouter();

  const handleEventSearch = (id: string) => {
    router.push("/events/" + id);
  };

  return (
    <div className="my-4">
      <div className="flex flex-col items-center">
        <div className="w-full md:w-3/5 mx-auto h-auto">
          <Image
            src={img}
            alt="host-image"
            sizes="100vw"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "50%",
            }}
          />
        </div>
        <p>{name}</p>
      </div>
      <p className="mt-8 mb-4">Other Events: </p>
      <div className="my-4 flex flex-wrap gap-4">
        {otherEvents?.map((otherEvt: any) => (
          <Button
            variant="outline"
            key={otherEvt?.node?.id}
            className="border-blue-700"
            onClick={() => handleEventSearch(otherEvt?.node?.id)}
          >
            {otherEvt?.node?.title.replaceAll("-", " ").slice(0, 12)}...
          </Button>
        ))}
      </div>
    </div>
  );
};

export default EventOrganizerCard;
