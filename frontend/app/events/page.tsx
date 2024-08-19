import React, { Suspense } from "react";
import type { Metadata } from "next";
import EventsList from "@/components/events-list";
import NavigationBreadcrumbs from "@/components/navigation-breadcrumbs";

interface EventPageProps {
  searchParams: {
    search?: string;
    isOnline?: string;
    filterTimeStatus?: string;
    filterSortField?: "RELEVANCE" | "DATETIME";
    page?: string;
  };
}

export const metadata: Metadata = {
  title: "Social Connections: Searched Events List",
  description:
    "Social Connections: events cards",
};

const Event = async ({ searchParams }: EventPageProps) => {
  console.log("SearchParams: ", searchParams);

  return (
    <main className="container mx-auto flex min-h-[80vh] items-start justify-between py-24 relative">
      <div className="max-w-screen-lg flex flex-wrap items-start w-full">
        <div className="w-full">
          <div>
            <NavigationBreadcrumbs />
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <EventsList
              searchKeyword={searchParams?.search}
              filterIsOnline={searchParams?.isOnline}
              filterTimeStatus={searchParams?.filterTimeStatus}
              filterSortField={searchParams?.filterSortField}
              pageNo={searchParams?.page}
            />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Event;
