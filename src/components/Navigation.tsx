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
      <nav className="glass mx-4 my-4 px-6 py-4 rounded-lg">
        <ul className="flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
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
      </nav>
    </header>
  );
};