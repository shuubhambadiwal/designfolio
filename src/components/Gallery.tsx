import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";

interface GalleryProps {
  items: {
    id: number;
    src: string;
    alt: string;
    category: string;
  }[];
  category?: string;
}

export const Gallery = ({ items, category }: GalleryProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  let pauseTimeout: number;

  const handleMouseMove = () => {
    setIsPaused(true);
    clearTimeout(pauseTimeout);
    pauseTimeout = window.setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(pauseTimeout);
    };
  }, []);

  const filteredItems = category
    ? items.filter((item) => item.category === category)
    : items;

  return (
    <>
      <div
        className="w-full overflow-hidden pt-24 px-4"
        onMouseMove={handleMouseMove}
      >
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-scroll",
            isPaused && "auto-scroll-paused"
          )}
        >
          {[...filteredItems, ...filteredItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="glass rounded-lg overflow-hidden aspect-square transition-transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage({ src: item.src, alt: item.alt })}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogOverlay className="backdrop-blur-sm" />
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};