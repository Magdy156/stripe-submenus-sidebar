import React, { useState, useContext } from "react";
import sublinks from "./data";

export const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubMenu = (text, coordinates) => {
    const page = sublinks.find((item) => item.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubMenu(true);
  };
  const closeSubMenu = () => {
    setIsSubMenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubMenu,
        openSidebar,
        closeSidebar,
        openSubMenu,
        closeSubMenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// Custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
