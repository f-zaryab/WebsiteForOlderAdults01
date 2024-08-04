"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
}

const Paginations = ({ totalPages }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPg = Number(searchParams.get("page")) || 1;

  const prevPg = currentPg - 1;
  const nextPg = currentPg + 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination className="justify-start mt-4 text-black hover:text-black duration-100">
      <PaginationContent>
        {prevPg >= 1 ? (
          <PaginationItem className="text-lrg">
            <PaginationPrevious href={createPageURL(prevPg)} />
          </PaginationItem>
        ) : null}

        {Array(totalPages)
          .fill("")
          .map((_, index) => (
            <PaginationItem
              key={`page-btn-${index}`}
              className="hidden sm:inline-block text-lrg"
            >
              <PaginationLink
                href={createPageURL(index + 1)}
                isActive={currentPg === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        {nextPg <= totalPages ? (
          <PaginationItem className="text-lrg duration-100">
            <PaginationNext href={createPageURL(nextPg)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};

export default Paginations;
