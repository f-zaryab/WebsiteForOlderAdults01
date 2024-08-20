import React from "react";
import Link from "next/link";
import { footerLinks } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="center-page-alignment py-8">
      <ul className="flex flex-wrap justify-center items-center gap-8 mb-4">
        {footerLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.href} className="text-lrg">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-lrg text-slate-50 font-bold text-center">
        &copy; All rights reserved, 2024.
      </p>
    </footer>
  );
};

export default Footer;
