// Tipe untuk artikel yang sedang dibaca
export type Article = {
  id: number;
  title: string;
  srcImg: string;
  // Kita buat bodyText sebagai array of strings agar mudah membuat paragraf
  bodyText: string[];
};

// Tipe untuk artikel di sidebar (bisa gunakan yang sudah ada)
export type SidebarArticle = {
  id: number;
  srcImg: string;
  title: string;
  href: string;
};

// Data untuk artikel utama yang sedang ditampilkan
export const currentArticle: Article = {
  id: 101,
  title: "Gunung Bromo destinasi yang paling dicari",
  srcImg: "/assets/images/bromo.svg",
  bodyText: [
    "Lorem ipsum dolor sit amet consectetur. Nulla sodales montes mattis at. Ullamcorper turpis arcu pulvinar phasellus diam orci venenatis et penatibus. Tellus dolor ullamcorper mattis est phasellus posuere massa. Egestas egestas faucibus pellentesque sit dui sit lacus quis. Vitae interdum rutrum amet aenean.",
    "Non odio sed et volutpat tellus arcu odio sed pharetra. Blandit elementum porttitor vel sit nisl. Nibh pharetra est egestas est at. Ultrices sit turpis quis vestibulum aliquam porta molestie pellentesque adipiscing. Diam orci id diam massa sit dictum neque nullam. Lorem faucibus urna arcu platea dui in non eget sed.",
    "Suscipit nisl ultricies eget aliquam quis. Sit suspendisse a odio massa convallis erat. Neque congue rhoncus erat volutpat aliquet vitae vulputate eu pellentesque. Iaculis lectus risus dolor ac vestibulum nisl dui. Orci proin integer sit a feugiat duis iaculis ut. Ullamcorper scelerisque fringilla enim pretium id mattis eu.",
    "Ut nunc donec leo orci duis pulvinar adipiscing. Nullam purus et sed tortor diam orci tristique. Nec enim mauris mi aliquet. Velit diam nisl est in aliquam massa dictum pellentesque molestie. Scelerisque massa ante iaculis faucibus lacinia est.",
    "Massa sed hendrerit at mauris. Vel curabitur congue nisl a. Massa senectus amet pretium facilisis cum sed. A in ullamcorper ullamcorper sed imperdiet diam. Purus diam fringilla duis et malesuada ac eu neque.",
    "Vel morbi euismod tempor ultrices lorem massa. Amet sed sed sit turpis gravida.",
  ],
};

// Data contoh untuk sidebar (gunakan yang sudah ada atau yang baru)
export const sidebarArticles: SidebarArticle[] = [
  {
    id: 1,
    srcImg: "/assets/images/pulau.svg",
    title: "Pesona Kepulauan Seribu yang menenangkan",
    href: "/blog/detail-blog",
  },
  {
    id: 2,
    srcImg: "/assets/images/bromo.svg",
    title: "Menyaksikan matahari terbit di Bromo",
    href: "/blog/detail-blog",
  },
  {
    id: 3,
    srcImg: "/assets/images/hero-3.svg",
    title: "Keajaiban api biru di Kawah Ijen",
    href: "/blog/detail-blog",
  },
  {
    id: 4,
    srcImg: "/assets/images/raja.svg",
    title: "Menemukan kedamaian di tengah Ubud",
    href: "/blog/detail-blog",
  },
];
