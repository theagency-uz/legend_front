const NAVBAR_LEFT = [
  {
    name: "catalog",
    link: "/catalog",
  },
  {
    name: "composition",
    link: "/composition",
  },
  {
    name: "contacts",
    link: "/contacts",
  },
];

const NAVBAR_RIGHT = [
  {
    src: "/assets/insta-icon.svg",
    alt: "instagram icon",
  },
  {
    src: "/assets/tg-icon.svg",
    alt: "telegram icon",
  },
  {
    src: "/assets/fb-icon.svg",
    alt: "facebook icon",
  },
];

const CATALOG_CARDS = [
  {
    name: "Вода в стеклянной таре",
    volume: "менее 1 литра",
    src: "/assets/catalog-1.png",
    alt: "Буталка из каталога",
    width: 151,
    height: 367,
    isEmpty: true,
  },
  {
    name: "Вода в большом объеме",
    volume: "19 литров",
    src: "/assets/catalog-2.png",
    alt: "Буталка из каталога",
    width: 196,
    height: 367,
    isEmpty: false,
    isMain: true,
  },
  {
    name: "Вода в пластиковой таре",
    volume: "менее 1 литра",
    src: "/assets/catalog-3.png",
    alt: "Буталка из каталога",
    width: 132,
    height: 367,
    isEmpty: true,
  },
];

const DEFAULT_ICON_SIZE = 1.42;
const DEFAULT_LOGO_SIZE = 7.92;
const DEFAULT_VIEWPORT_WIDTH = 1200;

export {
  NAVBAR_LEFT,
  NAVBAR_RIGHT,
  DEFAULT_ICON_SIZE,
  DEFAULT_LOGO_SIZE,
  DEFAULT_VIEWPORT_WIDTH,
  CATALOG_CARDS,
};
