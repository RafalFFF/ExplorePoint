import { createContext, useState } from 'react';

const AppContext = createContext();


const  ContextProvider=({children})=> {
    const [darkMode, setDarkMode] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    console.log(`sidebar w kontekscie aplikacji - ${sidebar}`)

  return (
    <AppContext.Provider value={{darkMode,setDarkMode,sidebar, setSidebar}}>
      {children}
    </AppContext.Provider>
  );
}
export {AppContext};
export default ContextProvider;