import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";

interface PropertyCardProp {
  title: string;
  description: string;
  hrefUrl: string;
}

const PropertyCard = ({ title, description, hrefUrl }: PropertyCardProp) => {
  return (
    <Link href={hrefUrl} className="h-full">
      <Card className="w-96 h-full bg-slate-200 text-black">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {/* <CardDescription>{description}</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
        <CardFooter className="flex justify-around items-center">
          <p>Price starting from: </p>
          <Button variant="outline" className="rounded-full w-10 h-10 p-0">
            <Heart />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PropertyCard;
