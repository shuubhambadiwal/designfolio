import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Navigation } from "@/components/Navigation";

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

  const getImagePath = (src: string) => {
    try {
      // If it's a URL, return as is
      if (src.startsWith('http')) {
        return src;
      }

      // For Vite, we need to use the special import.meta.env.BASE_URL
      const baseUrl = import.meta.env.BASE_URL || '';
      
      // Clean up the path
      const cleanPath = src.startsWith('/') ? src.slice(1) : src;
      
      // Construct the final path
      const finalPath = `${baseUrl}${cleanPath}`;
      
      console.log('Image path:', finalPath);
      return finalPath;
    } catch (error) {
      console.error('Error in getImagePath:', error);
      return src;
    }
  };

  useEffect(() => {
    // Log all image paths on component mount for debugging
    items.forEach(item => {
      const path = getImagePath(item.src);
      console.log(`Processing image ${item.id}:`, path);
      
      // Preload images
      const img = new Image();
      img.src = path;
      img.onload = () => console.log(`Image ${item.id} loaded successfully`);
      img.onerror = (e) => console.error(`Error loading image ${item.id}:`, e);
    });

    return () => {
      clearTimeout(pauseTimeout);
    };
  }, [items]);

  const filteredItems = category
    ? items.filter((item) => item.category === category)
    : items;

  return (
    <>
      <div className="sticky top-0 left-0 w-full z-10 bg-white shadow-md">
        <Navigation />
      </div>

      <div className="pt-9" onMouseMove={handleMouseMove}>
        <div className="auto-scroll-container px-4">
          <div
            className={cn(
              "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-scroll",
              isPaused && "auto-scroll-paused"
            )}
          >
            {filteredItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="rounded-lg overflow-hidden aspect-square transition-transform hover:scale-105 cursor-pointer"
                onClick={() => {
                  const imagePath = getImagePath(item.src);
                  console.log("Selected image path:", imagePath);
                  setSelectedImage({ 
                    src: imagePath,
                    alt: item.alt 
                  });
                  setIsPaused(true);
                }}
              >
                <img
                  src={getImagePath(item.src)}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error("Image failed to load:", e.currentTarget.src);
                    const imgElement = e.currentTarget;
                    console.log("Failed image element:", imgElement);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedImage(null);
            setIsPaused(false);
          }
        }}
      >
        <DialogOverlay className="bg-black/30 backdrop-blur-[2px]" />
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-4 border-none bg-transparent">
          {selectedImage && (
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  console.error("Modal image failed to load:", e.currentTarget.src);
                }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};