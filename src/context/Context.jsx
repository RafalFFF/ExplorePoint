import { createContext, useState } from 'react';

const AppContext = createContext();


const  ContextProvider=({children})=> {
    const [darkMode, setDarkMode] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(`sidebar w kontekscie aplikacji - ${isModalOpen}`);
  return (
    <AppContext.Provider value={{darkMode,setDarkMode,sidebar, setSidebar, isModalOpen, setIsModalOpen}}>
      {children}
    </AppContext.Provider>
  );
}
export {AppContext};
export default ContextProvider;