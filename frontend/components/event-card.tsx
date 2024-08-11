"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookmarkPlus, BookmarkCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import TooltipWrapper from "./tooltip-wrapper";

interface EventCardProp {
  index: string;
  title: string;
  description: string;
  imageUrl: string;
  hrefUrl: string;
  isSaved: boolean;
}

const EventCard = ({
  index,
  title,
  imageUrl,
  description,
  hrefUrl,
  isSaved
}: EventCardProp) => {
  const [fav, setFav] = useState(isSaved);

  const handleBookmarkEvent = (e: React.MouseEvent) => {
    e.preventDefault();
    setFav(!fav);
  };

  return (
    <Link href={hrefUrl} className="h-full relative">
      <Card className="w-96 h-full group flex flex-col bg-themeBG hover:bg-navFooterBG text-black border-none shadow-lg">
        <CardHeader className="gap-4">
          <div className="h-auto w-full overflow-hidden">
            <Image
              src={imageUrl}
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
              className="group-hover:scale-125 transition-transform duration-300"
            />
          </div>
          <div className="absolute top-1 left-1 text-white p-2 bg-black rounded-full">
            <TooltipWrapper tooltipMsg="You may use this number to remember this event card">
              <p>{index.slice(-3)}</p>
            </TooltipWrapper>
          </div>
          <CardTitle className="text-lrg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description.slice(0, 100)}...</p>
        </CardContent>
        <CardFooter className="flex justify-start items-center mt-auto">
          <TooltipWrapper tooltipMsg="Click this button to bookmark this event">
            <Button
              variant="link"
              className="rounded-full w-full h-10 p-0 justify-start gap-1"
              onClick={handleBookmarkEvent}
            >
              {fav ? (
                <>
                  <BookmarkCheck className="fill-green-600" />
                  <p className="text-black">Saved in your list</p>
                </>
              ) : (
                <>
                  <BookmarkPlus />
                  <p className="text-black">Bookmark</p>
                </>
              )}
            </Button>
          </TooltipWrapper>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default EventCard;
