export const navLinks = [
  {
    id: 1,
    title: "Features",
    href: "#",
  },
  {
    id: 2,
    title: "Developers",
    href: "#",
  },
  {
    id: 3,
    title: "Pricing",
    href: "#",
  },
  {
    id: 4,
    title: "Changelog",
    href: "#",
  },
];

export const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export type TabType = typeof tabs;
