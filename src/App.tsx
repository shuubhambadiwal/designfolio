import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Gallery } from "@/components/Gallary";
import dj from "../public/logos/dj.svg";

const queryClient = new QueryClient();

const items = [
  {
    id: "1",
    src: `${import.meta.env.BASE_URL + "/logos/1.svg"}`,
    alt: "Picture1",
    category: "logo",
  },
  {
    id: "2",
    src: `${import.meta.env.BASE_URL + "/logos/2.svg"}`,
    alt: "Picture2",
    category: "logo",
  },
  {
    id: "3",
    src: "",
    alt: "Picture3",
    category: "logo",
  },
  {
    id: "4",
    src: "",
    alt: "Picture4",
    category: "logo",
  },
  {
    id: "5",
    src: "",
    alt: "Picture5",
    category: "logo",
  },
  {
    id: "6",
    src: "",
    alt: "Picture6",
    category: "logo",
  },
  {
    id: "7",
    src: "",
    alt: "Picture7",
    category: "logo",
  },
  {
    id: "8",
    src: "",
    alt: "Picture8",
    category: "logo",
  },
  {
    id: "9",
    src: "",
    alt: "Picture9",
    category: "logo",
  },
  {
    id: "10",
    src: "",
    alt: "Picture10",
    category: "logo",
  },
  {
    id: "11",
    src: "",
    alt: "Picture11",
    category: "logo",
  },
  {
    id: "12",
    src: "",
    alt: "Picture12",
    category: "logo",
  },
  {
    id: "13",
    src: "",
    alt: "Picture13",
    category: "logo",
  },
  {
    id: "14",
    src: "",
    alt: "Picture14",
    category: "logo",
  },
  {
    id: "15",
    src: "",
    alt: "Picture15",
    category: "poster",
  },
  {
    id: "16",
    src: "",
    alt: "Picture16",
    category: "poster",
  },
  {
    id: "17",
    src: "",
    alt: "Picture17",
    category: "poster",
  },
  {
    id: "18",
    src: "",
    alt: "Picture18",
    category: "poster",
  },
  {
    id: "19",
    src: "",
    alt: "Picture19",
    category: "poster",
  },
  {
    id: "20",
    src: "",
    alt: "Picture20",
    category: "poster",
  },
  {
    id: "21",
    src: "",
    alt: "Picture21",
    category: "thumbnail",
  },
  {
    id: "22",
    src: "",
    alt: "Picture22",
    category: "thumbnail",
  },
  {
    id: "23",
    src: "",
    alt: "Picture23",
    category: "thumbnail",
  },
  {
    id: "24",
    src: "",
    alt: "Picture24",
    category: "thumbnail",
  },
  {
    id: "25",
    src: "",
    alt: "Picture25",
    category: "thumbnail",
  },
  {
    id: "26",
    src: "",
    alt: "Picture26",
    category: "thumbnail",
  },
  {
    id: "27",
    src: "",
    alt: "Picture27",
    category: "thumbnail",
  },
  {
    id: "28",
    src: "",
    alt: "Picture28",
    category: "thumbnail",
  },
  {
    id: "29",
    src: "",
    alt: "Picture29",
    category: "thumbnail",
  },
  {
    id: "30",
    src: "",
    alt: "Picture30",
    category: "thumbnail",
  },
  {
    id: "31",
    src: "",
    alt: "Picture31",
    category: "thumbnail",
  },
  {
    id: "32",
    src: "",
    alt: "Picture32",
    category: "thumbnail",
  },
  {
    id: "33",
    src: "",
    alt: "Picture33",
    category: "thumbnail",
  },
  {
    id: "34",
    src: "",
    alt: "Picture34",
    category: "thumbnail",
  },
  {
    id: "35",
    src: "",
    alt: "Picture35",
    category: "thumbnail",
  },
  {
    id: "36",
    src: "",
    alt: "Picture36",
    category: "thumbnail",
  },
  {
    id: "37",
    src: "",
    alt: "Picture37",
    category: "thumbnail",
  },
  {
    id: "38",
    src: "",
    alt: "Picture38",
    category: "thumbnail",
  },
  {
    id: "39",
    src: "",
    alt: "Picture39",
    category: "thumbnail",
  },
  {
    id: "40",
    src: "",
    alt: "Picture40",
    category: "thumbnail",
  },
  {
    id: "41",
    src: "",
    alt: "Picture41",
    category: "thumbnail",
  },
  {
    id: "42",
    src: "",
    alt: "Picture42",
    category: "thumbnail",
  },
  {
    id: "43",
    src: "",
    alt: "Picture43",
    category: "thumbnail",
  },
  {
    id: "44",
    src: "",
    alt: "Picture44",
    category: "thumbnail",
  },
  {
    id: "45",
    src: "",
    alt: "Picture45",
    category: "thumbnail",
  },
  {
    id: "46",
    src: "",
    alt: "Picture46",
    category: "thumbnail",
  },
  {
    id: "47",
    src: "",
    alt: "Picture47",
    category: "thumbnail",
  },
  {
    id: "48",
    src: "",
    alt: "Picture48",
    category: "thumbnail",
  },
  {
    id: "49",
    src: "",
    alt: "Picture49",
    category: "thumbnail",
  },
  {
    id: "50",
    src: "",
    alt: "Picture50",
    category: "thumbnail",
  },
  {
    id: "51",
    src: "",
    alt: "Picture51",
    category: "thumbnail",
  },
  {
    id: "52",
    src: "",
    alt: "Picture52",
    category: "thumbnail",
  },
  {
    id: "53",
    src: "",
    alt: "Picture53",
    category: "thumbnail",
  },
  {
    id: "54",
    src: "",
    alt: "Picture54",
    category: "thumbnail",
  },
  {
    id: "55",
    src: "",
    alt: "Picture55",
    category: "thumbnail",
  },
  {
    id: "56",
    src: "",
    alt: "Picture56",
    category: "thumbnail",
  },
  {
    id: "57",
    src: "",
    alt: "Picture57",
    category: "thumbnail",
  },
  {
    id: "58",
    src: "",
    alt: "Picture58",
    category: "thumbnail",
  },
  {
    id: "59",
    src: "",
    alt: "Picture59",
    category: "thumbnail",
  },
  {
    id: "60",
    src: "",
    alt: "Picture60",
    category: "thumbnail",
  },
  {
    id: "61",
    src: "",
    alt: "Picture61",
    category: "thumbnail",
  },
  {
    id: "62",
    src: "",
    alt: "Picture62",
    category: "thumbnail",
  },
  {
    id: "63",
    src: "",
    alt: "Picture63",
    category: "thumbnail",
  },
  {
    id: "64",
    src: "",
    alt: "Picture64",
    category: "thumbnail",
  },
  {
    id: "65",
    src: "",
    alt: "Picture65",
    category: "thumbnail",
  },
  {
    id: "66",
    src: "",
    alt: "Picture66",
    category: "thumbnail",
  },
  {
    id: "67",
    src: "",
    alt: "Picture67",
    category: "thumbnail",
  },
  {
    id: "68",
    src: "",
    alt: "Picture68",
    category: "thumbnail",
  },
  {
    id: "69",
    src: "",
    alt: "Picture69",
    category: "thumbnail",
  },
  {
    id: "70",
    src: "",
    alt: "Picture70",
    category: "thumbnail",
  },
  {
    id: "71",
    src: "",
    alt: "Picture71",
    category: "thumbnail",
  },
  {
    id: "72",
    src: "",
    alt: "Picture72",
    category: "thumbnail",
  },
  {
    id: "73",
    src: "",
    alt: "Picture73",
    category: "thumbnail",
  },
  {
    id: "74",
    src: "",
    alt: "Picture74",
    category: "thumbnail",
  },
  {
    id: "75",
    src: "",
    alt: "Picture75",
    category: "thumbnail",
  },
  {
    id: "76",
    src: "",
    alt: "Picture76",
    category: "thumbnail",
  },
  {
    id: "77",
    src: "",
    alt: "Picture77",
    category: "thumbnail",
  },
  {
    id: "78",
    src: "",
    alt: "Picture78",
    category: "thumbnail",
  },
  {
    id: "79",
    src: "",
    alt: "Picture79",
    category: "thumbnail",
  },
  {
    id: "80",
    src: "",
    alt: "Picture80",
    category: "thumbnail",
  },
  {
    id: "81",
    src: "",
    alt: "Picture81",
    category: "thumbnail",
  },
  {
    id: "82",
    src: "",
    alt: "Picture82",
    category: "thumbnail",
  },
  {
    id: "83",
    src: "",
    alt: "Picture83",
    category: "thumbnail",
  },
  {
    id: "84",
    src: "",
    alt: "Picture84",
    category: "thumbnail",
  },
  {
    id: "85",
    src: "",
    alt: "Picture85",
    category: "thumbnail",
  },
  {
    id: "86",
    src: "",
    alt: "Picture86",
    category: "thumbnail",
  },
  {
    id: "87",
    src: "",
    alt: "Picture87",
    category: "thumbnail",
  },
  {
    id: "88",
    src: "",
    alt: "Picture88",
    category: "thumbnail",
  },
  {
    id: "89",
    src: "",
    alt: "Picture89",
    category: "thumbnail",
  },
];


 
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
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