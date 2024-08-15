import { useState, useEffect } from "react";
import MoonLogo from "../../../assets/moon.svg";
import SunLogo from "../../../assets/sun.svg";

export const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-white dark:bg-transparent transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <SunLogo className="w-6 h-6 text-yellow-500" />
      ) : (
        <MoonLogo className="w-6 h-6 text-white" />
      )}
    </button>
  );
};
