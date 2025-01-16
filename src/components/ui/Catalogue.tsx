import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/Navigation";

const dummyPdfs = Array.from({ length: 41 }, (_, i) => ({
  id: `pdf-${i + 1}`,
  title: `Catalogue ${i + 1}`,
  url: `https://example.com/dummy-pdf-${i + 1}.pdf`, // Replace with actual PDF URLs
}));

export const Catalogue = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  let pauseTimeout: number;

  const handleMouseMove = () => {
    if (!selectedPdf) {
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
            {[...dummyPdfs, ...dummyPdfs].map((pdf, index) => (
              <div
                key={`${pdf.id}-${index}`}
                className="glass rounded-lg overflow-hidden aspect-[3/4] transition-transform hover:scale-105 cursor-pointer p-4"
                onClick={() => {
                  setSelectedPdf(pdf.url);
                  setIsPaused(true);
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center bg-white/50 rounded-md">
                  <svg
                    className="w-12 h-12 text-gray-400 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm text-gray-600">{pdf.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-overlay"></div>
        </div>
      </div>

      {selectedPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg w-[90vw] h-[90vh] p-4 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => {
                setSelectedPdf(null);
                setIsPaused(false);
              }}
            >
              Close
            </button>
            <iframe
              src={selectedPdf}
              className="w-full h-full"
              title="PDF Viewer"
            />
          </div>
        </div>
      )}
    </>
  );
};