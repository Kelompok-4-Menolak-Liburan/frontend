"use client"
import Sidebar from "@/components/sidebar/sidebar";
import { createContext, useState } from "react";

export const PopUp = createContext({});


const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  const [popUp, setPopUp] = useState<React.ReactNode | undefined>();
  return (
    <body>
      <PopUp.Provider value={setPopUp}>
        <div className="flex h-screen w-full bg-custom-purple-400">
          <Sidebar />
          <div className="max-lg:w-screen lg:flex-1 lg:pl-[226px] xl:pl-[253px]">
            {children}
            {popUp}
          </div>
        </div>
      </PopUp.Provider>
    </body>
  );
};

export default SiteLayout;
