import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      base: [
        "1.125em",
        {
          lineHeight: "1.5em",
          letterSpacing: "0em",
          fontWeight: "500",
        },
      ],
      lrg: [
        "1.5em",
        {
          lineHeight: "1.75em",
          letterSpacing: "0em",
          fontWeight: "600",
        },
      ],
      "1xl": [
        "1.75em",
        {
          lineHeight: "2em",
          letterSpacing: "0em",
          fontWeight: "600",
        },
      ],
      "2xl": [
        "2em",
        {
          lineHeight: "2.25em",
          letterSpacing: "0em",
          fontWeight: "800",
        },
      ],
      "3xl": [
        "2.25em",
        {
          lineHeight: "2.5em",
          letterSpacing: "0em",
          fontWeight: "900",
        },
      ],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        themeBG: "hsl(var(--themeSelection))",
        navFooterBG: "hsl(var(--navbarFooterBG))",
        pageBG: "hsl(var(--pageBG))",
        myPrimary: "hsl(var(--myPrimary))",
        myInversePrimary: "hsl(var(--myInversePrimary))",
        pillPrimary: "hsl(var(--pillPrimary))",
        pillInversePrimary: "hsl(var(--pillInversePrimary))",
        textNavPrimary: "hsl(var(--textNavPrimary))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        xs: "360px",
        sm: "600px",
        sml: "705px",
        md: "900px",
        mdl: "1200px",
        lg: "1440px",
        xl: "1530px",
        xxl: "1900px",
      },
      fontFamily: {
        sans: ["var(--font-opensans)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
