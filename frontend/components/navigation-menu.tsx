"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/lib/constants";

const NavMenu = () => {
  return (
    <div className="p-2 center-page-alignment center-component-alignment justify-center">
      {/* <div>
        <Link href="/" passHref>
          <Image
            src={"/logoTwo.png"}
            alt="travel-image"
            sizes="100vw"
            priority
            width={0}
            height={0}
            style={{
              width: "5rem",
              height: "3rem",
              objectFit: "contain",
            }}
          />
        </Link>
      </div> */}
      <div>
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            {/* second link -- to be activated later */}
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link 2</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem> */}

            {navLinks.map((item) => (
              <NavigationMenuItem key={item.id}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default NavMenu;
