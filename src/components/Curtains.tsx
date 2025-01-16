import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CurtainsProps {
  isOpen: boolean;
}

export const Curtains = ({ isOpen }: CurtainsProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div
        className={cn(
          "fixed inset-y-0 left-0 w-1/2 bg-black/30 backdrop-blur-xl transition-transform duration-1000",
          mounted ? "translate-x-0" : "-translate-x-full",
          !isOpen && "-translate-x-full"
        )}
      />
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-1/2 bg-black/30 backdrop-blur-xl transition-transform duration-1000",
          mounted ? "translate-x-0" : "translate-x-full",
          !isOpen && "translate-x-full"
        )}
      />
    </div>
  );
};