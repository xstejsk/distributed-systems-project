import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

const RefreshButton = ({ refresh }: { refresh: () => void }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <button
      className={`rounded-lg border-1 p-2  xl:right-32 shadow-md ${
        darkMode ? "shadow-neon-purp border-neon-purp" : "border-neutral-400"
      } transition-transform ease-in-out duration-300 transform-gpu hover:scale-110`}
      onClick={refresh}
    >
      Refresh
    </button>
  );
};

export default RefreshButton;
