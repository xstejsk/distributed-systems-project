import { createContext } from "react";

type SidebarContextType = {
  expanded: boolean;
  setExpanded: (darkMode: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType>({
  expanded: false,
  setExpanded: () => {},
});

export default SidebarContext;
