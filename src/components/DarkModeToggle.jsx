import React, { useState, useEffect } from "react";
import * as Switch from "@radix-ui/react-switch";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

function DarkModeToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setEnabled(stored === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setEnabled(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (enabled) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [enabled]);

  return (
    <div className="flex items-center space-x-2">
      <SunIcon className="w-5 h-5 text-yellow-400" />
      <Switch.Root
        checked={enabled}
        onCheckedChange={setEnabled}
        className="relative w-11 h-6 rounded-full bg-gray-300 dark:bg-gray-600 data-[state=checked]:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <Switch.Thumb
          className="block w-5 h-5 bg-white dark:bg-gray-200 rounded-full shadow transition-transform translate-x-1 data-[state=checked]:translate-x-5"
        />
      </Switch.Root>
      <MoonIcon className="w-5 h-5 text-purple-300" />
    </div>
  );
}

export default DarkModeToggle;
