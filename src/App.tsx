import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Gallery } from "@/components/Gallery";

const queryClient = new QueryClient();

// Sample data - replace with your actual content
const items = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Tech Logo 1",
    category: "logo",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "Tech Poster 1",
    category: "poster",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    alt: "Channel Art 1",
    category: "channel-art",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    alt: "Thumbnail 1",
    category: "thumbnail",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    alt: "Catalogue 1",
    category: "catalogue",
  },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<Gallery items={items} />} />
            <Route
              path="/logo"
              element={<Gallery items={items} category="logo" />}
            />
            <Route
              path="/catalogue"
              element={<Gallery items={items} category="catalogue" />}
            />
            <Route
              path="/poster"
              element={<Gallery items={items} category="poster" />}
            />
            <Route
              path="/thumbnail"
              element={<Gallery items={items} category="thumbnail" />}
            />
            <Route
              path="/channel-art"
              element={<Gallery items={items} category="channel-art" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;