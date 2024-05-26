"use client";
import { createContext, useContext, useState } from "react";

const contx = createContext<any>(null);

interface userInfoProps{
  firstName: string,
  lastName: string,
  tgUsername: string
}

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalIsActive, setModalIsActive] = useState(false)
  const [userInfo, setUserInfo] = useState< null | userInfoProps >(null)


  const values = {
    userInfo,
    setUserInfo,
    sidebarOpen,
    setSidebarOpen,
    modalIsActive,
    setModalIsActive,
  };

  return <contx.Provider value={values}>{children}</contx.Provider>;
}

export function useAllContx() {
  return useContext(contx);
}
