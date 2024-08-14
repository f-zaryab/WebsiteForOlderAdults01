import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import EventsBookMarked from "@/components/events-bookmarked";

const MyEventsPage = () => {
  const isLoggedIn = true;

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-between p-24">
      {isLoggedIn ? (
        <div>
          <h1 className="text-black">My Bookmarked Events: </h1>
          <EventsBookMarked />
        </div>
      ) : (
        <div>
          <h1 className="text-black">My shortlisted Events Page</h1>
          <Link href="/login">
            <Button variant="basic">Login</Button>
          </Link>
        </div>
      )}
    </main>
  );
};

export default MyEventsPage;
