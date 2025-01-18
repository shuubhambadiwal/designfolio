import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Gallery } from "@/components/Gallary";

const queryClient = new QueryClient();

const items = [
  {
    id: "1",
    src: "/public/logos/1.svg",
    alt: "Tech Logo 1",
    category: "logo",
  },
  {
    id: "2",
    src: "/public/logos/DJ.svg",
    alt: "Tech Logo 2",
    category: "logo",
  },
  {
    id: "3",
    src: "/public/logos/HS/3.svg",
    alt: "Tech Logo 3",
    category: "logo",
  },
  {
    id: "4",
    src: "/public/logos/2.svg",
    alt: "Tech Logo 4",
    category: "logo",
  },
  {
    id: "5",
    src: "/public/logos/IJC.svg",
    alt: "Poster 1",
    category: "logo",
  },
  {
    id: "6",
    src: "/public/logos/MN.svg",
    alt: "Poster 2",
    category: "logo",
  },
  {
    id: "7",
    src: "/public/logos/Q.svg",
    alt: "Poster 3",
    category: "logo",
  },
  {
    id: "8",
    src: "public/logos/HS/1.svg",
    alt: "Catalogue 1",
    category: "logo",
  },
  {
    id: "9",
    src: "public/logos/HS/2.svg",
    alt: "Catalogue 2",
    category: "logo",
  },
  {
    id: "10",
    src: "public/logos/BE-Logo-Shortform 15/3.svg",
    alt: "Catalogue 3",
    category: "logo",
  },
  {
    id: "11",
    src: "public/logos/BE-Logo-Shortform 15/4.svg",
    alt: "Thumbnail 1",
    category: "logo",
  },
  {
    id: "12",
    src: "public/logos/BytEquity WordART 15/1.svg",
    alt: "Thumbnail 2",
    category: "logo",
  },
  {
    id: "13",
    src: "public/logos/BytEquity WordART 15/2.svg",
    alt: "Thumbnail 3",
    category: "logo",
  },
  {
    id: "14",
    src: "public/logos/BytEquity WordART 15/3.svg",
    alt: "Channel Art 1",
    category: "logo",
  },
  // {
  //   id: "15",
  //   src: "public/logos/BEQ/1.svg",
  //   alt: "Channel Art 2",
  //   category: "logo",
  // },
  {
    id: "16",
    src: "public/Poster/Jp/1.svg",
    alt: "Logo 5",
    category: "poster",
  },
  {
    id: "17",
    src: "public/Poster/Jp/2.svg",
    alt: "Logo 6",
    category: "poster",
  },
  {
    id: "18",
    src: "public/Poster/BE/1.svg",
    alt: "Logo 7",
    category: "poster",
  },
  {
    id: "19",
    src: "public/Poster/BE/2.svg",
    alt: "Logo 8",
    category: "poster",
  },
  {
    id: "20",
    src: "public/Poster/FP.svg",
    alt: "Logo 9",
    category: "poster",
  },
  {
    id: "21",
    src: "public/Poster/jrm.svg",
    alt: "Poster 4",
    category: "poster",
  },
  {
    id: "22",
    src: "public/info/GD.svg",
    alt: "Poster 5",
    category: "thumbnail",
  },
  {
    id: "23",
    src: "public/info/web_infographic_bytequity_15/1.svg",
    alt: "Poster 6",
    category: "thumbnail",
  },
  {
    id: "24",
    src: "public/info/web_infographic_bytequity_15/2.svg",
    alt: "Catalogue 4",
    category: "thumbnail",
  },
  {
    id: "25",
    src: "public/info/web_infographic_bytequity_15/3.svg",
    alt: "Catalogue 5",
    category: "thumbnail",
  },
  {
    id: "26",
    src: "public/info/web_infographic_bytequity_15/4.svg",
    alt: "Catalogue 6",
    category: "thumbnail",
  },
  {
    id: "27",
    src: "public/info/web_infographic_bytequity_15/5.svg",
    alt: "Thumbnail 4",
    category: "thumbnail",
  },
  {
    id: "28",
    src: "public/info/web_infographic_bytequity_15/6.svg",
    alt: "Thumbnail 5",
    category: "thumbnail",
  },
  {
    id: "29",
    src: "public/info/web_infographic_bytequity_15/7.svg",
    alt: "Thumbnail 6",
    category: "thumbnail",
  },
  {
    id: "30",
    src: "public/info/web_infographic_bytequity_15/8.svg",
    alt: "Channel Art 3",
    category: "thumbnail",
  },
  {
    id: "31",
    src: "public/info/web_infographic_bytequity_15/9.svg",
    alt: "Channel Art 4",
    category: "thumbnail",
  },
  {
    id: "32",
    src: "public/info/web_infographic_bytequity_15/10.svg",
    alt: "Channel Art 5",
    category: "thumbnail",
  },

  {
    id: "33",
    src: "public/info/web_infographic_bytequity_15/11.svg",
    alt: "Logo 10",
    category: "thumbnail",
  },
  {
    id: "34",
    src: "public/info/Advance_Option_web_graphic 15/1.svg",
    alt: "Poster 7",
    category: "thumbnail",
  },
  {
    id: "35",
    src: "public/info/Advance_Option_web_graphic 15/2.svg",
    alt: "Catalogue 7",
    category: "thumbnail",
  },
  {
    id: "36",
    src: "public/info/Advance_Option_web_graphic 15/3.svg",
    alt: "Thumbnail 7",
    category: "thumbnail",
  },
  {
    id: "37",
    src: "public/info/Option_Trading+ Technical_Analysis_web_graphic_15/1.svg",
    alt: "Channel Art 6",
    category: "thumbnail",
  },
  {
    id: "38",
    src: "public/info/Option_Trading+ Technical_Analysis_web_graphic_15/2.svg",
    alt: "Logo 11",
    category: "thumbnail",
  },
  {
    id: "39",
    src: "public/info/Option_Trading+ Technical_Analysis_web_graphic_15/3.svg",
    alt: "Poster 8",
    category: "thumbnail",
  },
  {
    id: "40",
    src: "public/info/Option_Trading+ Technical_Analysis_web_graphic_15/4.svg",
    alt: "Catalogue 8",
    category: "thumbnail",
  },
  {
    id: "41",
    src: "public/info/Option_Trading+ Technical_Analysis_web_graphic_15/5.svg",
    alt: "Thumbnail 8",
    category: "thumbnail",
  },
  {
    id: "42",
    src: "public/info/Option_Trading+ Technical_Analysis_web_graphic_15/6.svg",
    alt: "Channel Art 7",
    category: "thumbnail",
  },
  {
    id: "43",
    src: "public/info/Option_Trading+ Technical_Analysis_web_graphic_15/7.svg",
    alt: "Logo 12",
    category: "thumbnail",
  },
  {
    id: "44",
    src: "public/info/Technical_Analysis_Web_graphic_15/1.svg",
    alt: "Poster 9",
    category: "thumbnail",
  },
  {
    id: "45",
    src: "public/info/Technical_Analysis_Web_graphic_15/2.svg",
    alt: "Catalogue 9",
    category: "thumbnail",
  },
  {
    id: "46",
    src: "public/info/Technical_Analysis_Web_graphic_15/3.svg",
    alt: "Thumbnail 9",
    category: "thumbnail",
  },
  {
    id: "47",
    src: "public/info/Technical_Analysis_Web_graphic_15/4.svg",
    alt: "Channel Art 8",
    category: "thumbnail",
  },
  {
    id: "48",
    src: "public/info/Technical_Analysis_Web_graphic_15/5.svg",
    alt: "Logo 13",
    category: "thumbnail",
  },
  {
    id: "49",
    src: "public/info/web_infographic_bytequity_15/1.svg",
    alt: "Poster 10",
    category: "thumbnail",
  },
  {
    id: "50",
    src: "public/info/web_infographic_bytequity_15/2.svg",
    alt: "Catalogue 10",
    category: "thumbnail",
  },
  {
    id: "51",
    src: "public/info/web_infographic_bytequity_15/3.svg",
    alt: "Thumbnail 10",
    category: "thumbnail",
  },
  {
    id: "52",
    src: "public/info/web_infographic_bytequity_15/4.svg",
    alt: "Poster 10",
    category: "thumbnail",
  },
  {
    id: "53",
    src: "public/info/web_infographic_bytequity_15/5.svg",
    alt: "Catalogue 10",
    category: "thumbnail",
  },
  {
    id: "54",
    src: "public/info/web_infographic_bytequity_15/6.svg",
    alt: "Thumbnail 10",
    category: "thumbnail",
  },
  {
    id: "55",
    src: "public/info/web_infographic_bytequity_15/7.svg",
    alt: "Poster 10",
    category: "thumbnail",
  },
  {
    id: "56",
    src: "public/info/web_infographic_bytequity_15/8.svg",
    alt: "Catalogue 10",
    category: "thumbnail",
  },
  {
    id: "57",
    src: "public/info/web_infographic_bytequity_15/9.svg",
    alt: "Thumbnail 10",
    category: "thumbnail",
  },
  {
    id: "58",
    src: "public/info/web_infographic_bytequity_15/10.svg",
    alt: "Poster 10",
    category: "thumbnail",
  },
  {
    id: "59",
    src: "public/info/web_infographic_bytequity_15/11.svg",
    alt: "Catalogue 10",
    category: "thumbnail",
  },
  {
    id: "60",
    src: "public/info/whats_app_ Banner_Byequity_15/1.svg",
    alt: "Thumbnail 10",
    category: "thumbnail",
  },
  {
    id: "61",
    src: "public/info/whats_app_ Banner_Byequity_15/2.svg",
    alt: "Poster 10",
    category: "thumbnail",
  },
  {
    id: "62",
    src: "public/info/whats_app_ Banner_Byequity_15/3.svg",
    alt: "Catalogue 10",
    category: "thumbnail",
  },
  {
    id: "63",
    src: "public/info/whats_app_ Banner_Byequity_15/4.svg",
    alt: "Thumbnail 10",
    category: "thumbnail",
  },
  {
    id: "64",
    src: "public/info/whats_app_ Banner_Byequity_15/5.svg",
    alt: "Poster 10",
    category: "thumbnail",
  },
  {
    id: "65",
    src: "public/info/whats_app_ Banner_Byequity_15/6.svg",
    alt: "Catalogue 10",
    category: "thumbnail",
  },
  {
    id: "66",
    src: "public/info/whats_app_ Banner_Byequity_15/7.svg",
    alt: "Thumbnail 10",
    category: "thumbnail",
  },
  {
    id: "67",
    src: "public/info/whats_app_ Banner_Byequity_15/8.svg",
    alt: "Poster 10",
    category: "thumbnail",
  },
  {
    id: "68",
    src: "public/info/whats_app_ Banner_Byequity_15/9.svg",
    alt: "Catalogue 10",
    category: "thumbnail",
  },
  {
    id: "69",
    src: "public/Logos/Bytequity/1.svg",
    alt: "Thumbnail 10",
    category: "logo",
  },
  {
    id: "70",
    src: "public/Logos/Bytequity/2.svg",
    alt: "Poster 10",
    category: "logo",
  },
  {
    id: "71",
    src: "public/Logos/Bytequity/3.svg",
    alt: "Catalogue 10",
    category: "logo",
  },
  {
    id: "72",
    src: "public/Logos/Bytequity/4.svg",
    alt: "Thumbnail 10",
    category: "logo",
  },
  {
    id: "73",
    src: "public/Logos/Bytequity/5.svg",
    alt: "Poster 10",
    category: "logo",
  },
  {
    id: "74",
    src: "public/Logos/Bytequity/6.svg",
    alt: "Catalogue 10",
    category: "logo",
  },
  {
    id: "75",
    src: "public/Logos/BEQ/1.svg",
    alt: "Thumbnail 10",
    category: "log",
  },
  {
    id: "76",
    src: "public/Logos/BEQ/2.svg",
    alt: "Poster 10",
    category: "logo",
  },
  {
    id: "77",
    src: "public/Logos/BEQ/3.svg",
    alt: "Catalogue 10",
    category: "logo",
  },
  {
    id: "78",
    src: "public/Logos/BEQ/4.svg",
    alt: "Thumbnail 10",
    category: "logo",
  },
  {
    id: "79",
    src: "public/Logos/BEQ/5.svg",
    alt: "Poster 10",
    category: "logo",
  },
  {
    id: "80",
    src: "public/Logos/BEQ/6.svg",
    alt: "Catalogue 10",
    category: "logo",
  },
  {
    id: "81",
    src: "public/Logos/BEQ/7.svg",
    alt: "Thumbnail 10",
    category: "logo",
  },
  {
    id: "82",
    src: "public/Logos/BEQ/8.svg",
    alt: "Poster 10",
    category: "logo",
  },
  {
    id: "83",
    src: "public/Logos/BEQ/9.svg",
    alt: "Catalogue 10",
    category: "logo",
  },
  {
    id: "84",
    src: "public/Logos/BEQ/10.svg",
    alt: "Thumbnail 10",
    category: "logo",
  },
  {
    id: "85",
    src: "public/Logos/BEQ/11.svg",
    alt: "Poster 10",
    category: "logo",
  },
  {
    id: "86",
    src: "public/Logos/BEQ/12.svg",
    alt: "Catalogue 10",
    category: "logo",
  },
  {
    id: "87",
    src: "public/Logos/BEQ/13.svg",
    alt: "Thumbnail 10",
    category: "logo",
  },
  {
    id: "88",
    src: "public/Logos/BEQ/15.svg",
    alt: "Poster 10",
    category: "logo",
  },
  {
    id: "89",
    src: "public/Logos/Bytequity/1.svg",
    alt: "Catalogue 10",
    category: "logo",
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
             <Route
              path="/intro"
              element={<Gallery items={items} category="intro" />}
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