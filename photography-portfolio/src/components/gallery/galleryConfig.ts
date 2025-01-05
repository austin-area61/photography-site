export type ImageCategory = {
  id: string;
  name: string;
  images: {
    src: string;
    alt: string;
    aspectRatio?: string;
  }[];
};

export const categories: ImageCategory[] = [
  {
    id: "all",
    name: "All Photos",
    images: [], // Will be automatically populated
  },
  {
    id: "long-exposure",
    name: "Long Exposure",
    images: [
      {
        src: "/images/roadrage.jpg",
        alt: "City Lights Trail",
      },
      {
        src: "/images/totallongshot.jpg",
        alt: "City Lights Trail",
      },
      {
        src: "/images/trainedu.jpg",
        alt: "City Lights Trail",
      },
      // Add more images
    ],
  },
  {
    id: "portraits",
    name: "Portraits",
    images: [
      {
        src: "/images/portraits/canoncloseup.jpg",
        alt: "canon close up",
      },
      {
        src: "/images/portraits/omusakhulu.jpg",
        alt: "alex image",
      },
      {
        src: "/images/portraits/roughstate.jpg",
        alt: "rough state",
      },
      {
        src: "/images/portraits/roughstate2.jpg",
        alt: "rough state 2",
      },
      {
        src: "/images/portraits/smokeit.jpg",
        alt: "smoke it",
      },
      {
        src: "/images/portraits/double-tree-hilton.jpg",
        alt: "BetSafe",
      },
      {
        src: "/images/portraits/portrait1.jpg",
        alt: "Edwin",
      },
      // Add your portrait images
    ],
  },
  {
    id: "street",
    name: "Street",
    images: [
      // Add your street photography images
    ],
  },
  {
    id: "tours",
    name: "Tours",
    images: [
      {
        src: "/images/tours/tours1.jpg",
        alt: "Sydney Opera house",
      },
      {
        src: "/images/tours/tours2.jpg",
        alt: "Tour 2",
      },
      {
        src: "/images/tours/tours3.jpg",
        alt: "Tour 3",
      },
      {
        src: "/images/tours/tours4.jpg",
        alt: "Tour 4",
      },
      {
        src: "/images/tours/tours5.jpg",
        alt: "Masif Events",
      },
      {
        src: "/images/tours/tours6.jpg",
        alt: "Oz",
      },
      {
        src: "/images/tours/tours7.jpg",
        alt: "Let's shoot",
      },
      {
        src: "/images/tours/tours8.jpg",
        alt: "Night Shoot",
      },
      // Add your tours photography images
    ],
  },
];
