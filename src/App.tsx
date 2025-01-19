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
    src: "/logos/2.svg",
    alt: "Picture1",
    category: "logo",
  },
  {
    id: "2",
    src: "/logos/dj.svg",
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