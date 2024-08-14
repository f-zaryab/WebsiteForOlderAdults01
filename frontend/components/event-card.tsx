"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
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
import { useUserData } from "@/app/UserDataContext";

interface EventCardProp {
  index: string;
  title: string;
  description: string;
  imageUrl: string;
  hrefUrl: string;
  tags: {
    node: {
      name: string;
      id: string;
      urlkey: string;
    };
  }[];
}

const EventCard = ({
  index,
  title,
  imageUrl,
  description,
  hrefUrl,
  tags,
}: EventCardProp) => {
  const [fav, setFav] = useState(false);
  const { state, updateEvents } = useUserData();

  // Checking on-mount that that if property is saved or not: From state and from localStorage
  useEffect(() => {
    const localStorageData = localStorage?.getItem("userData");
    const stateLS = localStorageData
      ? JSON.parse(localStorage.getItem("userData")!)
      : {};

    const isInside = stateLS?.events
      ? stateLS?.events?.some((item: any) => item.index === index)
      : state?.events?.some((item: any) => item.index === index);

    if (isInside) {
      setFav(true);

      return;
    }

    setFav(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.events]);

  const handleBookmarkEvent = (e: React.MouseEvent) => {
    e.preventDefault();
    setFav(!fav);

    const cardDataBookmarked = {
      index,
      title,
      imageUrl,
      description,
      hrefUrl,
    };

    /*
    Reasoning in UpdateEVents():
      index: to locate event via its id number
      tags: different tags related to event would help in identifying topics in which user is interested
    */
    const extractedTags = tags.map((tag) => tag?.node?.urlkey);

    if (!fav) {
      updateEvents(cardDataBookmarked, extractedTags, true);

      return;
    } else {
      updateEvents(cardDataBookmarked, extractedTags, false);
    }
  };

  return (
    <Link href={hrefUrl} className="h-full relative">
      <Card className="w-96 h-full group flex flex-col bg-themeBG hover:bg-navFooterBG text-black border-none shadow-lg">
        <CardHeader className="gap-4">
          <div className="h-auto w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt="event-image"
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
              <p>{index?.slice(-3)}</p>
            </TooltipWrapper>
          </div>
          <CardTitle className="text-lrg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ReactMarkdown>{`${description?.slice(0, 100)}...`}</ReactMarkdown>
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
