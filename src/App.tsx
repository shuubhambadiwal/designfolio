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
    src: "Logos/2.svg",
    alt: "Picture1",
    category: "logo",
  },
  {
    id: "2",
    src: "Logos/DJ.svg",
    alt: "Picture2",
    category: "logo",
  },
  {
    id: "3",
    src: "/logos/hs/3.svg",
    alt: "Picture3",
    category: "logo",
  },
  {
    id: "4",
    src: "/logos/ijc.svg",
    alt: "Picture4",
    category: "logo",
  },
  {
    id: "5",
    src: "/logos/1.svg",
    alt: "Picture5",
    category: "logo",
  },
  {
    id: "6",
    src: "/logos/mn.svg",
    alt: "Picture6",
    category: "logo",
  },
  {
    id: "7",
    src: "/logos/bea/2.svg",
    alt: "Picture7",
    category: "logo",
  },
  {
    id: "8",
    src: "/logos/hs/1.svg",
    alt: "Picture8",
    category: "logo",
  },
  {
    id: "9",
    src: "/logos/bea/1.svg",
    alt: "Picture9",
    category: "logo",
  },
  {
    id: "10",
    src: "/logos/be/3.svg",
    alt: "Picture10",
    category: "logo",
  },
  {
    id: "11",
    src: "/logos/bea/3.svg",
    alt: "Picture11",
    category: "logo",
  },
  {
    id: "12",
    src: "/logos/q.svg",
    alt: "Picture12",
    category: "logo",
  },
  {
    id: "13",
    src: "/logos/bef/1.svg",
    alt: "Picture13",
    category: "logo",
  },
  {
    id: "14",
    src: "/logos/bef/2.svg",
    alt: "Picture14",
    category: "logo",
  },
  {
    id: "15",
    src: "/logos/beq/1.svg",
    alt: "Picture15",
    category: "logo",
  },
  {
    id: "16",
    src: "/logos/beq/2.svg",
    alt: "Picture16",
    category: "logo",
  },
  {
    id: "17",
    src: "/logos/beq/3.svg",
    alt: "Picture17",
    category: "logo",
  },
  // {
  //   id: "18",
  //   src: "/logos/beq/4.svg",
  //   alt: "Picture18",
  //   category: "logo",
  // },
  {
    id: "19",
    src: "/logos/beq/5.svg",
    alt: "Picture19",
    category: "logo",
  },
  // {
  //   id: "20",
  //   src: "/logos/beq/6.svg",
  //   alt: "Picture20",
  //   category: "logo",
  // },
  {
    id: "21",
    src: "/logos/beq/7.svg",
    alt: "Picture21",
    category: "logo",
  },
  {
    id: "22",
    src: "/logos/beq/8.svg",
    alt: "Picture22",
    category: "logo",
  },
  {
    id: "23",
    src: "/logos/beq/9.svg",
    alt: "Picture23",
    category: "logo",
  },
  {
    id: "24",
    src: "/logos/beq/10.svg",
    alt: "Picture24",
    category: "logo",
  },
  {
    id: "25",
    src: "/logos/beq/11.svg",
    alt: "Picture25",
    category: "logo",
  },
  {
    id: "26",
    src: "/logos/beq/12.svg",
    alt: "Picture26",
    category: "logo",
  },
  {
    id: "27",
    src: "/logos/beq/13.svg",
    alt: "Picture27",
    category: "logo",
  },
  {
    id: "28",
    src: "/logos/beq/15.svg",
    alt: "Picture28",
    category: "logo",
  },
  {
    id: "29",
    src: "/logos/bqq/1.svg",
    alt: "Picture29",
    category: "logo",
  },
  {
    id: "30",
    src: "/logos/bqq/2.svg",
    alt: "Picture30",
    category: "logo",
  },
  {
    id: "31",
    src: "/logos/bqq/3.svg",
    alt: "Picture31",
    category: "logo",
  },
  {
    id: "32",
    src: "/logos/bqq/4.svg",
    alt: "Picture32",
    category: "logo",
  },
  {
    id: "33",
    src: "/logos/bqq/5.svg",
    alt: "Picture33",
    category: "logo",
  },
  {
    id: "34",
    src: "/logos/bqq/6.svg",
    alt: "Picture34",
    category: "logo",
  },
  {
    id: "35",
    src: "/info/GD.svg",
    alt: "Picture35",
    category: "thumbnail",
  },
  {
    id: "36",
    src: "/info/wi/1.svg",
    alt: "Picture36",
    category: "thumbnail",
  },
  {
    id: "37",
    src: "/info/wi/2.svg",
    alt: "Picture37",
    category: "thumbnail",
  },
  {
    id: "38",
    src: "/info/wi/3.svg",
    alt: "Picture38",
    category: "thumbnail",
  },
  {
    id: "39",
    src: "/info/wi/4.svg",
    alt: "Picture39",
    category: "thumbnail",
  },
  {
    id: "40",
    src: "/info/wi/5.svg",
    alt: "Picture40",
    category: "thumbnail",
  },
  {
    id: "41",
    src: "/info/wi/6.svg",
    alt: "Picture41",
    category: "thumbnail",
  },
  {
    id: "42",
    src: "/info/wi/7.svg",
    alt: "Picture42",
    category: "thumbnail",
  },
  {
    id: "43",
    src: "/info/wi/8.svg",
    alt: "Picture43",
    category: "thumbnail",
  },
  {
    id: "44",
    src: "/info/wi/9.svg",
    alt: "Picture44",
    category: "thumbnail",
  },
  {
    id: "45",
    src: "/info/wi/10.svg",
    alt: "Picture45",
    category: "thumbnail",
  },
  {
    id: "46",
    src: "/info/wi/11.svg",
    alt: "Picture46",
    category: "thumbnail",
  },
  {
    id: "47",
    src: "/info/wab/1.svg",
    alt: "Picture47",
    category: "thumbnail",
  },
  {
    id: "48",
    src: "/info/wab/2.svg",
    alt: "Picture48",
    category: "thumbnail",
  },
  {
    id: "49",
    src: "/info/wab/3.svg",
    alt: "Picture49",
    category: "thumbnail",
  },
  {
    id: "50",
    src: "/info/wab/4.svg",
    alt: "Picture50",
    category: "thumbnail",
  },
  {
    id: "51",
    src: "/info/wab/5.svg",
    alt: "Picture51",
    category: "thumbnail",
  },
  {
    id: "52",
    src: "/info/wab/6.svg",
    alt: "Picture52",
    category: "thumbnail",
  },
  {
    id: "53",
    src: "/info/wab/7.svg",
    alt: "Picture53",
    category: "thumbnail",
  },
  {
    id: "54",
    src: "/info/wab/9.svg",
    alt: "Picture54",
    category: "thumbnail",
  },
  {
    id: "55",
    src: "/info/ad/1.svg",
    alt: "Picture55",
    category: "channel-art",
  },
  {
    id: "56",
    src: "/info/ad/2.svg",
    alt: "Picture56",
    category: "channel-art",
  },
  {
    id: "57",
    src: "/info/ad/3.svg",
    alt: "Picture57",
    category: "channel-art",
  },
  {
    id: "58",
    src: "/info/ad/4.svg",
    alt: "Picture58",
    category: "channel-art",
  },
  {
    id: "59",
    src: "/info/ot/1.svg",
    alt: "Picture59",
    category: "channel-art",
  },
  {
    id: "60",
    src: "/info/ot/2.svg",
    alt: "Picture60",
    category: "channel-art",
  },
  {
    id: "61",
    src: "/info/ot/3.svg",
    alt: "Picture61",
    category: "channel-art",
  },
  {
    id: "62",
    src: "/info/ot/4.svg",
    alt: "Picture62",
    category: "channel-art",
  },
  {
    id: "63",
    src: "/info/ot/5.svg",
    alt: "Picture63",
    category: "channel-art",
  },
  {
    id: "64",
    src: "/info/ot/6.svg",
    alt: "Picture64",
    category: "channel-art",
  },
  {
    id: "65",
    src: "/info/ot/7.svg",
    alt: "Picture65",
    category: "channel-art",
  },
  {
    id: "66",
    src: "/info/ta/1.svg",
    alt: "Picture66",
    category: "channel-art",
  },
  {
    id: "67",
    src: "/info/ta/2.svg",
    alt: "Picture67",
    category: "channel-art",
  },
  {
    id: "68",
    src: "/info/ta/3.svg",
    alt: "Picture68",
    category: "channel-art",
  },
  {
    id: "69",
    src: "/info/ta/4.svg",
    alt: "Picture69",
    category: "channel-art",
  },
  {
    id: "70",
    src: "/info/ta/5.svg",
    alt: "Picture70",
    category: "channel-art",
  },
  {
    id: "71",
    src: "/info/thumb.svg",
    alt: "Picture71",
    category: "channel-art",
  },
  {
    id: "72",
    src: "/poster/thumb2.svg",
    alt: "Picture72",
    category: "channel-art",
  },
  {
    id: "73",
    src: "/poster/fp.svg",
    alt: "Picture73",
    category: "poster",
  },
  {
    id: "74",
    src: "/poster/jp/1.svg",
    alt: "Picture74",
    category: "poster",
  },
  {
    id: "75",
    src: "/poster/jp/2.svg",
    alt: "Picture75",
    category: "poster",
  },
  {
    id: "76",
    src: "/poster/be/1.svg",
    alt: "Picture76",
    category: "poster",
  },
  {
    id: "77",
    src: "/poster/be/2.svg",
    alt: "Picture77",
    category: "poster",
  },
  {
    id: "78",
    src: "/poster/jrm.svg",
    alt: "Picture78",
    category: "poster",
  },
  // {
  //   id: "79",
  //   src: "",
  //   alt: "Picture79",
  //   category: "",
  // },
  // {
  //   id: "80",
  //   src: "",
  //   alt: "Picture80",
  //   category: "",
  // },
  // {
  //   id: "81",
  //   src: "",
  //   alt: "Picture81",
  //   category: "",
  // },
  // {
  //   id: "82",
  //   src: "",
  //   alt: "Picture82",
  //   category: "",
  // },
  // {
  //   id: "83",
  //   src: "",
  //   alt: "Picture83",
  //   category: "",
  // },
  // {
  //   id: "84",
  //   src: "",
  //   alt: "Picture84",
  //   category: "",
  // },
  // {
  //   id: "85",
  //   src: "",
  //   alt: "Picture85",
  //   category: "",
  // },
  // {
  //   id: "86",
  //   src: "",
  //   alt: "Picture86",
  //   category: "",
  // },
  // {
  //   id: "87",
  //   src: "",
  //   alt: "Picture87",
  //   category: "",
  // },
  // {
  //   id: "88",
  //   src: "",
  //   alt: "Picture88",
  //   category: "",
  // },
  // {
  //   id: "89",
  //   src: "",
  //   alt: "Picture89",
  //   category: "",
  // },
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