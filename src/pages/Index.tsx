import { Gallery } from "@/components/Gallary";

const Index = () => {
  const galleryItems = [
    {
      id: "1",
      src: "/Logos/be/3.svg",
      alt: "Logo 3",
    },
    {
      id: "2", 
      src: "/Logos/be/4.svg",
      alt: "Logo 4"
    },
    {
      id: "3",
      src: "/Logos/bea/1.svg", 
      alt: "Logo BEA 1"
    },
    {
      id: "4",
      src: "/Logos/bea/2.svg",
      alt: "Logo BEA 2"
    },
    {
      id: "5",
      src: "/Logos/bea/3.svg",
      alt: "Logo BEA 3"
    },
    {
      id: "6",
      src: "/Logos/bef/2.svg",
      alt: "Logo BEF 2"
    },
    {
      id: "7",
      src: "/Logos/bqq/3.svg",
      alt: "Logo BQQ 3"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Gallery items={galleryItems} />
    </div>
  );
};

export default Index;