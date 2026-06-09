import { createContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <UIContext.Provider value={{isVideoOpen, setIsVideoOpen}} >
      {children}
    </UIContext.Provider>
  );
};

export default UIContext;
