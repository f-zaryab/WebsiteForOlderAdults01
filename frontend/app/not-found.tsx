import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const notFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <h2>Page - 404 </h2>
      <Link href="/">
        <Button variant="outline">Go Back to Home Page</Button>
      </Link>
    </div>
  );
};

export default notFound;
