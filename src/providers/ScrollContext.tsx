import React, { createContext, useRef, useContext, ReactNode, } from "react";

interface ScrollContextType {
  home: React.RefObject<HTMLElement>;
  skills: React.RefObject<HTMLElement>;
  aboutme: React.RefObject<HTMLElement>;
  services: React.RefObject<HTMLElement>;
  projects: React.RefObject<HTMLElement>;
}

interface ScrollProviderProps {
  children: ReactNode;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const home = useRef(null);
  const skills = useRef(null);
  const aboutme = useRef(null);
  const projects = useRef(null);
  const services = useRef(null);

  return (
    <ScrollContext.Provider
      value={{
        home,
        skills,
        aboutme,
        projects,
        services,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useScrollContext = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (context === undefined) throw new Error('useScrollContext must be used within a ScrollProvider');
  return context;
};
