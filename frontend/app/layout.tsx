"use client";

import "./globals.css";
import { Inter, Open_Sans, Roboto_Mono } from "next/font/google";
import { useState } from "react";
import ColorPicker from "@/components/color-picker";
import NavMenu from "@/components/navigation-menu";
import Footer from "@/components/footer";
import { themeOptions } from "@/lib/constants";
import SizePicker from "@/components/size-picker";

// ----------------- FONTS ------------------------//
const inter = Inter({ subsets: ["latin"] });

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  //👇 Add variable to our object
  variable: "--font-opensans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

// ----------------- FONTS-END --------------------//

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [themeColor, setThemeColor] = useState<string>(themeOptions[0]);
  const [currentSize, setcurrentSize] = useState<number>(16);

  const handleThemeChange = (newTheme: string) => {
    setThemeColor(newTheme);
  };

  return (
    <html lang="en" style={{ fontSize: `${currentSize}px` }}>
      <body
        className={`${inter.className} ${openSans.variable} ${robotoMono.variable} ${themeColor}`}
      >
        <>
          {/* ------------------------ Theme Picker -------------------------*/}
          <section className="bg-themeBG w-full py-2 px-4 fixed top-0 z-20 min-h-[9rem] sml:min-h-[6rem] mdl:min-h-[4rem] lg:min-h-[4rem]">
            <div className="max-w-screen-lg mx-auto flex gap-4 align-middle my-2">
              <div className="z-10 flex justify-between align-middle w-full">
                <ColorPicker
                  themeSelected={themeColor}
                  themeChange={handleThemeChange}
                />
                <SizePicker
                  currentSize={currentSize}
                  handleSize={setcurrentSize}
                />
              </div>
            </div>
          </section>

          {/* --------------------------- Navbar ---------------------------- */}
          <section className="top-[9.75rem] sml:top-[6rem] mdl:top-[4rem] lg:top-[4.5rem] fixed w-full bg-navFooterBG z-10 shadow-lg">
            <NavMenu />
          </section>

          {/* --------------------------- Children -------------------------- */}
          <div className="mt-32">{children}</div>

          {/* ---------------------------- Footer --------------------------- */}
          <div className="w-full bg-navFooterBG">
            <Footer />
          </div>
        </>
      </body>
    </html>
  );
}
