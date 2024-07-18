import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const MyEventsPage = () => {
  const isLoggedIn = false;

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-between p-24">
      {isLoggedIn ? (
        <div>
          <h1 className="text-black">My shortlisted Events Page</h1>
          <p>Page under consstruction</p>
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
