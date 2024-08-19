import React from "react";
import Link from "next/link";
import { footerLinks } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="center-page-alignment py-8">
      <div className="flex flex-wrap justify-center items-center gap-8 mb-4">
        {footerLinks.map((link) => (
          <Link href={link.href} key={link.id} className="text-lrg">
            {link.label}
          </Link>
        ))}
      </div>
      <p className="text-lrg text-slate-50 font-bold text-center">
        &copy; All rights reserved, 2024.
      </p>
    </footer>
  );
};

export default Footer;
