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
    <Pagination className="justify-end mt-4">
      <PaginationContent>
        {prevPg >= 1 ? (
          <PaginationItem>
            <PaginationPrevious href={createPageURL(prevPg)} />
          </PaginationItem>
        ) : null}

        {Array(totalPages)
          .fill("")
          .map((_, index) => (
            <PaginationItem
              key={`page-btn-${index}`}
              className="hidden sm:inline-block"
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
          <PaginationItem>
            <PaginationNext href={createPageURL(nextPg)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};

export default Paginations;
