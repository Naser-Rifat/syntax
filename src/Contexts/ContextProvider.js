import { createContext, useContext, useEffect, useState } from "react";
import useFirebase from "../Auth/useFirebase/useFirebase";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const firebaseContext = useFirebase();
  console.log(firebaseContext);

  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [expandedMenu, setExpandedMenu] = useState(true);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    if (screenSize <= 900) {
      setExpandedMenu(false);
    } else {
      setExpandedMenu(true);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  return (
    <StateContext.Provider
      value={{
        firebaseContext,
        expandedMenu,

        activeMenu,
        screenSize,
        setScreenSize,
        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
