import { useContext } from "react";
import { Moon as MoonIcon } from "lucide-react";
import ThemeContext from "../context/ThemeContext";

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className={`rounded-lg border-1 p-2  xl:right-32 shadow-md ${
        darkMode ? "shadow-neon-purp border-neon-purp" : "border-neutral-400"
      } transition-transform ease-in-out duration-300 transform-gpu hover:scale-110`}
      onClick={toggleDarkMode}
    >
      <MoonIcon
        className={`h-6 w-6 cursor-pointer stroke-1 ${
          darkMode
            ? "fill-neon-purp stroke-neon-purp"
            : "fill-none stroke-neutral-400"
        } transition-transform ease-in-out duration-300 hover:scale-110`}
      />
    </button>
  );
};

export default ThemeIcon;
