type Destination = {
  id: number;
  srcImg: string;
  title: string;
  location: string;
  price: string;
};

export const popularDestinations: Destination[] = [
  {
    id: 1,
    srcImg: "/assets/images/bromo.svg",
    title: "Gunung Bromo",
    location: "Jawa Timur, Indonesia",
    price: "3jt/malam",
  },
  {
    id: 2,
    srcImg: "/assets/images/pulau.svg",
    title: "Kepulauan Seribu",
    location: "Jakarta, Indonesia",
    price: "2jt/malam",
  },
  {
    id: 3,
    srcImg: "/assets/images/raja.svg",
    title: "Raja Ampat",
    location: "Raja Ampat, Papua",
    price: "1.5jt/malam",
  },
];
