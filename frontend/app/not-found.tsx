import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const notFound = () => {
  return (
    <div className="flex min-h-[80vh] flex-wrap flex-col gap-8 items-center justify-between p-24">
      <h1 className="text-black">Not Found</h1>
      <h2 className="text-black">Page - 404 </h2>
      <Link href="/">
        <Button variant="basic">Go Back to Home Page</Button>
      </Link>
    </div>
  );
};

export default notFound;
