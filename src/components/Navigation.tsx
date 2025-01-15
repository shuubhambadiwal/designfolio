import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Logo", path: "/logo" },
  { label: "Catalogue", path: "/catalogue" },
  { label: "Poster", path: "/poster" },
  { label: "Thumbnail", path: "/thumbnail" },
  { label: "Channel Art", path: "/channel-art" },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass mx-2 my-4 px-6 py-4 rounded-lg flex items-center justify-between">
      <div className="flex items-center">
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Sun.png"
            alt="Logo"
            className="rounded-full w-11 h-11"
          />
        </div>
        <ul className="flex items-center justify-center gap-10">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <span className="text-2xl font-signature">Shubham Badiwal</span>
        </div>
      </nav>
    </header>
  );
};