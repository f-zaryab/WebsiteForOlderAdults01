export const themeOptions: string[] = ["grey", "brown", "green", "blue"];

export const navLinks = [
  {
    id: "01",
    label: "Home Page",
    href: "/",
  },
  {
    id: "02",
    label: "Events Page",
    href: "/events",
  },
  {
    id: "03",
    label: "Our story",
    href: "/about#our-story",
  },
  {
    id: "04",
    label: "Login",
    href: "/myevents",
  },
];

export const eventCategories = [
  {
    id: "01_travel",
    label: "Travel and Outdoor",
    href: "/events?search=travel-outdoor",
  },
  {
    id: "02_social",
    label: "Social Activities",
    href: "/events?search=social_activities",
  },
  {
    id: "03_hobbies",
    label: "Hobbies and Passion",
    href: "/events?search=hobbies_passion",
  },
  {
    id: "04_sports",
    label: "Sports and Fitness",
    href: "/events?search=sports_fitness",
  },
  {
    id: "05_technology",
    label: "Technology",
    href: "/events?search=technology",
  },
  {
    id: "06_art",
    label: "Art and Culture",
    href: "/events?search=art_culture",
  },
  {
    id: "07_games",
    label: "Games",
    href: "/events?search=games",
  },
];

export const popularSearchOptions = [
  // {
  //   id: "upcoming-events",
  //   label: "Upcoming Events",
  //   href: "/events?search=upcoming",
  // },
  {
    id: "popular-events",
    label: "Popular Events",
    href: "/events?search=popular",
  },
  {
    id: "online-events",
    label: "Online Events",
    href: "/events?search=online",
  },
  {
    id: "explore-events-categories",
    label: "Explore More Categories",
    href: "#categories",
  },
];

export const eventsPerPage = 4;
