import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Curtains } from "./Curtains";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Logo", path: "/logo" },
  { label: "Brochure", path: "/poster" },
  { label: "Channel Art", path: "/channel-art" },
  { label: "Info Graphics", path: "/thumbnail" },
  // { label: "Catalogue", path: "/catalogue" },
  { label: "Intro", path: "/intro" },
];

export const Navigation = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [isCurtainsOpen, setIsCurtainsOpen] = useState(true);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    // Auto close curtains after 2 seconds on initial load
    const timer = setTimeout(() => {
      setIsCurtainsOpen(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const toggleCurtains = () => {
    setIsCurtainsOpen(!isCurtainsOpen);
  };

  return (
    <>
      <Curtains isOpen={isCurtainsOpen} />
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="glass top-0 flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={toggleCurtains} className="rounded-full hover:opacity-80 transition-opacity">
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Sun.png"
                alt="Logo"
                className="rounded-full w-11 h-11"
              />
            </button>
          </div>
          <ul className="flex items-center justify-center gap-10">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary dark:hover:text-white",
                    location.pathname === item.path
                      ? "text-primary dark:text-white"
                      : "text-muted-foreground dark:text-gray-400"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 mr-3">
            <button
              onClick={toggleDarkMode}
              className="text-3xl font-signature hover:opacity-80 transition-opacity flex items-center gap-2"
            >
              <span>Shubham Badiwal</span>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};