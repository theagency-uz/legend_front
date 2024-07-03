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

const STEPS_CARDS = [
  {
    name: "Оседание",
    src: "/assets/step-1.svg",
    alt: "1 этап",
    width: 60,
    height: 60,
    text: "Фильтрация мелких частиц после источника",
  },
  {
    name: "Угольный фильтр",
    src: "/assets/step-2.svg",
    alt: "2 этап",
    width: 60,
    height: 60,
    text: "Очищение от запахов и примесей, улучшение вкуса",
  },
  {
    name: "Ионообменник",
    src: "/assets/step-3.svg",
    alt: "3 этап",
    width: 60,
    height: 60,
    text: "Фильтрация солей жесткости для мягкости воды",
  },
  {
    name: "Патронный фильтр",
    src: "/assets/step-4.svg",
    alt: "4 этап",
    width: 60,
    height: 60,
    text: "Очищение от мутности и микрочастиц",
  },
  {
    name: "Озонирование",
    src: "/assets/step-5.svg",
    alt: "5 этап",
    width: 60,
    height: 60,
    text: "Уничтожение бактерии, вирусов для безопасности воды",
  },
];

const NEWS_CARDS = [
  {
    src: "/assets/news-1.webp",
    alt: "news 1",
    width: 300,
    height: 250,
  },
  {
    src: "/assets/news-2.webp",
    alt: "news 2",
    width: 300,
    height: 250,
  },
  {
    src: "/assets/news-3.webp",
    alt: "news 3",
    width: 300,
    height: 250,
  },
];

const FOOTER_CATALOG_LINKS = [
  {
    href: "",
    text: "Вода в стеклянной таре",
  },
  {
    href: "",
    text: "Вода в пластиковой таре",
  },
  {
    href: "",
    text: "Вода в большом объеме",
  },
];

const FOOTER_MENU_LINKS = [
  {
    href: "",
    text: "Состав и источник",
  },
  {
    href: "",
    text: "Водоподготовка",
  },
  {
    href: "",
    text: "О компании",
  },
];

const DEFAULT_ICON_SIZE = 1.42;
const DEFAULT_LOGO_SIZE = 7.92;
const DEFAULT_VIEWPORT_WIDTH = 1200;

const MOBILE_SIZE = 450;

const PRODUCTS = [
  {
    title: "Вода в пластиковой бутылке",
    isGaz: "с газом",
    slug: "voda-1",
    imgSrc: "/assets/1.png",
    alt: "Вода в пластиковой бутылке",
    volume: "0.33 л",
    cost: 500000,
    material: "plastic",
    category: 3,
    number: 12,
  },
  {
    title: "Вода в пластиковой бутылке",
    isGaz: "с газом",
    slug: "voda-2",
    imgSrc: "/assets/4.png",
    alt: "Вода в пластиковой бутылке",
    volume: "0.33 л",
    cost: 500000,
    material: "plastic",
    category: 3,
    number: 12,
  },
  {
    title: "Вода в пластиковой бутылке",
    isGaz: "с газом",
    slug: "voda-3",
    imgSrc: "/assets/8.png",
    alt: "Вода в пластиковой бутылке",
    volume: "0.33 л",
    cost: 500000,
    material: "plastic",
    category: 3,
    number: 12,
  },
  {
    title: "Вода в пластиковой бутылке",
    isGaz: "с газом",
    slug: "voda-4",
    imgSrc: "/assets/1.png",
    alt: "Вода в пластиковой бутылке",
    volume: "0.33 л",
    cost: 500000,
    material: "plastic",
    category: 3,
    number: 10,
  },
  {
    title: "Вода в пластиковой бутылке",
    isGaz: "без газа",
    slug: "voda-5",
    imgSrc: "/assets/4.png",
    alt: "Вода в пластиковой бутылке",
    volume: "0.33 л",
    cost: 500000,
    material: "glass",
    category: 2,
    number: 16,
  },
  {
    title: "Вода в пластиковой бутылке",
    isGaz: "без газа",
    slug: "voda-6",
    imgSrc: "/assets/8.png",
    alt: "Вода в пластиковой бутылке",
    volume: "0.33 л",
    cost: 400000,
    material: "glass",
    category: 2,
    number: 10,
  },
  {
    title: "Вода в пластиковой бутылке",
    isGaz: "без газа",
    slug: "voda-7",
    imgSrc: "/assets/1.png",
    alt: "Вода в пластиковой бутылке",
    volume: "0.33 л",
    cost: 300000,
    material: "glass",
    category: 1,
  },
  {
    title: "Вода в пластиковой бутылке",
    isGaz: "без газа",
    slug: "voda-8",
    imgSrc: "/assets/4.png",
    alt: "Вода в пластиковой бутылке",
    volume: "0.33 л",
    cost: 100000,
    material: "glass",
    category: 1,
  },
];

export {
  NAVBAR_LEFT,
  NAVBAR_RIGHT,
  DEFAULT_ICON_SIZE,
  DEFAULT_LOGO_SIZE,
  DEFAULT_VIEWPORT_WIDTH,
  CATALOG_CARDS,
  STEPS_CARDS,
  NEWS_CARDS,
  FOOTER_CATALOG_LINKS,
  FOOTER_MENU_LINKS,
  MOBILE_SIZE,
  PRODUCTS,
};
