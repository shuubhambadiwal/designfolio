import { Gallery } from "@/components/Gallery";

const Index = () => {
  const galleryItems = [
    {
      id: "1",
      src: "Logos/HS/1.svg",
      alt: "Logo 1",
    },
    {
      id: "2",
      src: "Logos/HS/2.svg",
      alt: "Logo 2"
    },
    {
      id: "3",
      src: "Logos/HS/3.svg",
      alt: "Logo 3"
    },
    {
      id: "4",
      src: "Logos/be/3.svg",
      alt: "Logo BE 3"
    },
    {
      id: "5",
      src: "Logos/be/4.svg",
      alt: "Logo BE 4"
    },
    {
      id: "6",
      src: "Logos/bea/2.svg",
      alt: "Logo BEA 2"
    },
    {
      id: "7",
      src: "Logos/bea/3.svg",
      alt: "Logo BEA 3"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Gallery items={galleryItems} />
    </div>
  );
};

export default Index;