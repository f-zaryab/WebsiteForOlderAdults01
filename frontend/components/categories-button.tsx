import React from "react";
import Link from "next/link";

interface CategoriesButtonProps {
  label: string;
  href: string;
}

const CategoriesButton = ({ label, href }: CategoriesButtonProps) => {
  return (
    <Link
      href={href}
      className="bg-green-500 p-4 flex justify-center items-center font-bold rounded-sm"
    >
      {label}
    </Link>
  );
};

export default CategoriesButton;
