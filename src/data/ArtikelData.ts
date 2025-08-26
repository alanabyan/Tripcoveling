// Tipe untuk artikel di konten utama
export type MainArticle = {
  id: number;
  srcImg: string;
  title: string;
  excerpt: string;
  href: string;
};

// Tipe untuk artikel di sidebar
export type SidebarArticle = {
  id: number;
  srcImg: string;
  title: string;
  href: string;
};

// Data contoh untuk konten utama
export const mainArticles: MainArticle[] = [
  {
    id: 1,
    srcImg: "/assets/images/raja.svg",
    title: "Gunung Bromo destinasi yang paling dicari",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur, id faucibus orci maecenas eget pulvinar. In purus tellus maecenas eget pulvinar.",
    href: "/blog/detail-blog",
  },
  {
    id: 2,
    srcImg: "/assets/images/bromo.svg",
    title: "Gunung Bromo destinasi yang paling dicari",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur, id faucibus orci maecenas eget pulvinar. In purus tellus maecenas eget pulvinar.",
    href: "/blog/detail-blog",
  },
  {
    id: 3,
    srcImg: "/assets/images/pulau.svg",
    title: "Gunung Bromo destinasi yang paling dicari",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur, id faucibus orci maecenas eget pulvinar. In purus tellus maecenas eget pulvinar.",
    href: "/blog/detail-blog",
  },
];

// Data contoh untuk sidebar
export const sidebarArticles: SidebarArticle[] = [
  {
    id: 1,
    srcImg: "/assets/images/pulau.svg",
    title: "Gunung Bromo destinasi yang paling dicari",
    href: "/blog/detail-blog",
  },
  {
    id: 2,
    srcImg: "/assets/images/hero-3.svg",
    title: "Gunung Bromo destinasi yang paling dicari",
    href: "#",
  },
  {
    id: 3,
    srcImg: "/assets/images/bromo.svg",
    title: "Gunung Bromo destinasi yang paling dicari",
    href: "/blog/detail-blog",
  },
  {
    id: 4,
    srcImg: "/assets/images/raja.svg",
    title: "Gunung Bromo destinasi yang paling dicari",
    href: "/blog/detail-blog",
  },
];
