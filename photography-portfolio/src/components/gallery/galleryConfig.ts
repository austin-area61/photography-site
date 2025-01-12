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
        alt: "Mt Coot-Tha Summit Lookout",
      },
      {
        src: "/images/all/all2.jpg",
        alt: "Guildford",
      },
      {
        src: "/images/all/all3.jpg",
        alt: "",
      },
      {
        src: "/images/all/all4.jpg",
        alt: "",
      },
      {
        src: "/images/all/all5.jpg",
        alt: "",
      },
      {
        src: "/images/all/all6.jpg",
        alt: "",
      },
      {
        src: "/images/all/all7.jpg",
        alt: "",
      },
      {
        src: "/images/all/all8.jpg",
        alt: "",
      },
      {
        src: "/images/all/all9.jpg",
        alt: "",
      },
      {
        src: "/images/all/all10.jpg",
        alt: "",
      },
      {
        src: "/images/all/all11.jpg",
        alt: "",
      },
      {
        src: "/images/all/all12.jpg",
        alt: "",
      },
      {
        src: "/images/all/all13.jpg",
        alt: "",
      },
      {
        src: "/images/all/all14.jpg",
        alt: "",
      },
      {
        src: "/images/all/all15.jpg",
        alt: "",
      },
      {
        src: "/images/all/all16.jpg",
        alt: "",
      },
      {
        src: "/images/all/all17.jpg",
        alt: "",
      },
      {
        src: "/images/all/all18.jpg",
        alt: "",
      },
      {
        src: "/images/all/all19.jpg",
        alt: "",
      },
      {
        src: "/images/all/all20.jpg",
        alt: "",
      },
      {
        src: "/images/all/all21.jpg",
        alt: "",
      },
      {
        src: "/images/all/all22.jpg",
        alt: "",
      },
      {
        src: "/images/all/all23.jpg",
        alt: "",
      },
      {
        src: "/images/all/all24.jpg",
        alt: "",
      },
      {
        src: "/images/all/all25.jpg",
        alt: "",
      },
      {
        src: "/images/all/all26.jpg",
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
      {
        src: "/images/long-exposure/long1.jpg",
        alt: "",
      },
      {
        src: "/images/long-exposure/long2.jpg",
        alt: "",
      },
      {
        src: "/images/long-exposure/long3.jpg",
        alt: "",
      },
      {
        src: "/images/long-exposure/long4.jpg",
        alt: "",
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
        alt: "Circular Quay",
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
