import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Gallery } from "@/components/Gallary";

const queryClient = new QueryClient();

// Sample data organized by categories
const items = [
  // Logos
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    alt: "Tech Logo 1",
    category: "logo",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Tech Logo 2",
    category: "logo",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "Tech Logo 3",
    category: "logo",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    alt: "Tech Logo 4",
    category: "logo",
  },
  // Posters
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    alt: "Poster 1",
    category: "poster",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    alt: "Poster 2",
    category: "poster",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    alt: "Poster 3",
    category: "poster",
  },
  // Catalogues
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    alt: "Catalogue 1",
    category: "catalogue",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    alt: "Catalogue 2",
    category: "catalogue",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    alt: "Catalogue 3",
    category: "catalogue",
  },
  // Thumbnails
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    alt: "Thumbnail 1",
    category: "thumbnail",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    alt: "Thumbnail 2",
    category: "thumbnail",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    alt: "Thumbnail 3",
    category: "thumbnail",
  },
  // Channel Art
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    alt: "Channel Art 1",
    category: "channel-art",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    alt: "Channel Art 2",
    category: "channel-art",
  },
  // Additional items for each category...
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    alt: "Logo 5",
    category: "logo",
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
    alt: "Logo 6",
    category: "logo",
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    alt: "Logo 7",
    category: "logo",
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    alt: "Logo 8",
    category: "logo",
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    alt: "Logo 9",
    category: "logo",
  },
  // More posters
  {
    id: 21,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Poster 4",
    category: "poster",
  },
  {
    id: 22,
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    alt: "Poster 5",
    category: "poster",
  },
  {
    id: 23,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    alt: "Poster 6",
    category: "poster",
  },
  // More catalogues
  {
    id: 24,
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Catalogue 4",
    category: "catalogue",
  },
  {
    id: 25,
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    alt: "Catalogue 5",
    category: "catalogue",
  },
  {
    id: 26,
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    alt: "Catalogue 6",
    category: "catalogue",
  },
  // More thumbnails
  {
    id: 27,
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    alt: "Thumbnail 4",
    category: "thumbnail",
  },
  {
    id: 28,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Thumbnail 5",
    category: "thumbnail",
  },
  {
    id: 29,
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    alt: "Thumbnail 6",
    category: "thumbnail",
  },
  // More channel art
  {
    id: 30,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    alt: "Channel Art 3",
    category: "channel-art",
  },
  {
    id: 31,
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    alt: "Channel Art 4",
    category: "channel-art",
  },
  {
    id: 32,
    src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    alt: "Channel Art 5",
    category: "channel-art",
  },
  // Additional items to reach 51...
  {
    id: 33,
    src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    alt: "Logo 10",
    category: "logo",
  },
  {
    id: 34,
    src: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
    alt: "Poster 7",
    category: "poster",
  },
  {
    id: 35,
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    alt: "Catalogue 7",
    category: "catalogue",
  },
  {
    id: 36,
    src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    alt: "Thumbnail 7",
    category: "thumbnail",
  },
  {
    id: 37,
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    alt: "Channel Art 6",
    category: "channel-art",
  },
  {
    id: 38,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Logo 11",
    category: "logo",
  },
  {
    id: 39,
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    alt: "Poster 8",
    category: "poster",
  },
  {
    id: 40,
    src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    alt: "Catalogue 8",
    category: "catalogue",
  },
  {
    id: 41,
    src: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    alt: "Thumbnail 8",
    category: "thumbnail",
  },
  {
    id: 42,
    src: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
    alt: "Channel Art 7",
    category: "channel-art",
  },
  {
    id: 43,
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    alt: "Logo 12",
    category: "logo",
  },
  {
    id: 44,
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    alt: "Poster 9",
    category: "poster",
  },
  {
    id: 45,
    src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    alt: "Catalogue 9",
    category: "catalogue",
  },
  {
    id: 46,
    src: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    alt: "Thumbnail 9",
    category: "thumbnail",
  },
  {
    id: 47,
    src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    alt: "Channel Art 8",
    category: "channel-art",
  },
  {
    id: 48,
    src: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    alt: "Logo 13",
    category: "logo",
  },
  {
    id: 49,
    src: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    alt: "Poster 10",
    category: "poster",
  },
  {
    id: 50,
    src: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    alt: "Catalogue 10",
    category: "catalogue",
  },
  {
    id: 51,
    src: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
    alt: "Thumbnail 10",
    category: "thumbnail",
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