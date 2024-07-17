import React from "react";
import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge";

interface SearchBadgeProps {
  label: string;
  hrefLink: string;
}

const SearchBadge = ({ hrefLink, label }: SearchBadgeProps) => {
  return (
    <div>
      <Link href={hrefLink} className={badgeVariants({ variant: "default" })}>
        {label}
      </Link>
    </div>
  );
};

export default SearchBadge;
