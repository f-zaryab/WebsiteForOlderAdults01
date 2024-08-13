"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface EventMiniCardProps {
  title: string;
}

const EventMiniCard = ({ title }: EventMiniCardProps) => {
  const router = useRouter();

  const handleSearchByTopic = () => {
    router.push("/events?search=" + title.replaceAll(' ', '-').toLowerCase());
  };

  return (
    <Button variant="outline" onClick={handleSearchByTopic}>
      {title}
    </Button>
  );
};

export default EventMiniCard;
