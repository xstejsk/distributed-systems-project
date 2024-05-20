import { ChevronLast, ChevronFirst } from "lucide-react";
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import SidebarContext from "../context/SidebarContext";

type SidebarProps = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: SidebarProps) {
  // const [expanded, setExpanded] = useState(false);
  const { expanded, setExpanded } = useContext(SidebarContext);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const { darkMode } = useContext(ThemeContext);

  return (
    <aside
      className={`"h-screen flex w-fit ${
        darkMode ? "bg-menu-dark text text-gray-300" : null
      } `}
    >
      <nav
        className={`h-screen flex flex-col justify-between border-r shadow-sm ${
          darkMode ? "border-border-dark" : ""
        }`}
      >
        <div>
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src="https://img.logoipsum.com/243.svg"
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
              alt=""
            />
            <button
              onClick={toggleExpanded}
              className={`p-1.5 rounded-lg transition-all duration-400 ${
                darkMode ? "hover:bg-neon-purp" : "bg-gray-50 hover:bg-gray-100"
              } hidden md:block`}
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          {/* <SidebarContext.Provider value={{ expanded }}> */}
          <ul className="flex-1 px-3">{children}</ul>
          {/* </SidebarContext.Provider> */}
        </div>
      </nav>
    </aside>
  );
}

type SidebarItemProps = {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  link: string;
};

export function SidebarItem({
  icon,
  text,
  active,
  alert,
  link,
}: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <Link to={link}>
      <li
        className={`
        relative flex items-center py-2 px-3 my-1 z-50
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active && !darkMode
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
        ${
          darkMode && active
            ? "bg-border-dark text-neon-purp hover:bg-opacity-30"
            : ""
        }
        ${darkMode && !active ? "hover:bg-border-dark" : ""}

    `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}
