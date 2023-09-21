import React, { createContext, useState } from "react";

interface MenuContextType {
  menuStatus: boolean;
  updateMenuStatus: (newStatus: boolean) => void;
}

export const MenuContext = createContext<MenuContextType>(
  {} as MenuContextType
);

interface Props {
  children: React.ReactNode;
}

const MenuContextProvider = ({ children }: Props) => {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  const updateMenuStatus = (newStatus: boolean) => {
    setMenuStatus(newStatus);
  };
  return (
    <MenuContext.Provider value={{ menuStatus, updateMenuStatus }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
