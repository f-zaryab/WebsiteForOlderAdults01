"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const NavigationBreadcrumbs = () => {
  const pathname = usePathname();
  const pathArray = pathname.split("/");

  return (
    <section className="text-lrg ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-white hover:text-black bg-myInversePrimary hover:bg-pageBG px-4 py-1 rounded-md"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/${pathArray[1]}`}
              className="text-white hover:text-black bg-myInversePrimary hover:bg-pageBG px-4 py-1 rounded-md"
            >
              {pathArray[1]}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathArray[2] !== undefined ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={pathname}
                  className="text-white hover:text-black bg-myInversePrimary hover:bg-pageBG px-4 py-1 rounded-md"
                >
                  Event Details
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          ) : null}
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
};

export default NavigationBreadcrumbs;