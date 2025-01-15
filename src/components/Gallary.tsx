import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import {Navigation} from "@/components/Navigation";

interface GalleryProps {
  items: { id: string; src: string; alt: string; category?: string }[];
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
    if (!selectedImage) {
      setIsPaused(true);
      clearTimeout(pauseTimeout);
      pauseTimeout = window.setTimeout(() => {
        setIsPaused(false);
      }, 1000);
    }
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
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
        <Navigation />
      </div>
      <div className="pt-24 px-4" onMouseMove={handleMouseMove}>
        <div className="auto-scroll-container">
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
                onClick={() => {
                  setSelectedImage({ src: item.src, alt: item.alt });
                  setIsPaused(true);
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="fade-overlay"></div>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => {
        if (!open) {
          setSelectedImage(null);
          setIsPaused(false);
        }
      }}>
        <DialogOverlay className="bg-black/30 backdrop-blur-[2px]" />
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-4 border-none bg-transparent">
          {selectedImage && (
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};