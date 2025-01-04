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
        src: "/images/long-exposure/image1.jpg",
        alt: "City Lights Trail",
      },
      // Add more images
    ],
  },
  {
    id: "portraits",
    name: "Portraits",
    images: [
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
];
