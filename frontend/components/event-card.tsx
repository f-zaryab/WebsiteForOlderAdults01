import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookmarkPlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

interface EventCardProp {
  title: string;
  description: string;
  imageUrl: string;
  hrefUrl: string;
}

const EventCard = ({
  title,
  imageUrl,
  description,
  hrefUrl,
}: EventCardProp) => {
  return (
    <Link href={hrefUrl} className="h-full">
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
          <CardTitle className="text-lrg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description.slice(0, 100)}...</p>
        </CardContent>
        <CardFooter className="flex justify-start items-center mt-auto">
          <Button variant="link" className="rounded-full w-10 h-10 p-0">
            <BookmarkPlus />
          </Button>
          <p className="text-black">Bookmark</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default EventCard;
