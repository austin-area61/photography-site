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
    images: [
      {
        src: "/images/all/all1.jpg",
        alt: "",
      },
    ], // Will be automatically populated
  },
  {
    id: "long-exposure",
    name: "Long Exposure",
    images: [
      {
        src: "/images/roadrage.jpg",
        alt: "Total Kenya",
      },
      {
        src: "/images/totallongshot.jpg",
        alt: "Total Kenya",
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
      {
        src: "/images/portraits/portrait2.jpg",
        alt: "Msee wa senke",
      },
      // Add your portrait images
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
        alt: "Sydney Harbour Bridge",
      },
      {
        src: "/images/tours/tours3.jpg",
        alt: "La Perouse",
      },
      {
        src: "/images/tours/tours4.jpg",
        alt: "Sydney Opera House",
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
      {
        src: "/images/tours/tours9.jpg",
        alt: "With B-Front",
      },
      {
        src: "/images/tours/tours10.jpg",
        alt: "With Wasted Penguinz",
      },
      {
        src: "/images/tours/tours11.jpg",
        alt: "La Perouse",
      },
      {
        src: "/images/tours/tours12.jpg",
        alt: "Parramatta",
      },
      // Add your tours photography images
    ],
  },
];
