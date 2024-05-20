import { UserCircle, BarChart3 } from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";
import Header from "./Header";
import Transactions from "./Transactions";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <div
      className={`h-screen grid grid-cols-[auto_minmax(0,1fr)] grid-rows-[auto_minmax(0,1fr)] auto-rows-fr font-quicksand ${
        darkMode ? "bg-code-dark text-gray-300" : ""
      }`}
    >
      <div className="col-span-1 row-span-2 flex justify-start h-screen items-start">
        <Sidebar>
          <SidebarItem
            icon={<BarChart3 size={20} />}
            text="Dashboard"
            active={location.pathname === "/accounts/1"}
            link="/accounts/1"
          />
          <SidebarItem
            icon={<UserCircle size={20} />}
            text="Accounts"
            active={location.pathname === "/accounts"}
            link="/accounts"
          />
        </Sidebar>
      </div>
      <div className="col-span-1 row-span-1 flex justify-start items-center">
        <Header name="Transactions" />
      </div>
      <div className="col-span-1 row-span-1 flex justify-start items-start">
        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard;
