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
      className="bg-slate-800 text-slate-100 p-4 flex justify-center items-center font-bold rounded-sm"
    >
      {label}
    </Link>
  );
};

export default CategoriesButton;
