import { createContext, useState } from 'react';

const AppContext = createContext();


const  ContextProvider=({children})=> {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <AppContext.Provider value={{darkMode,setDarkMode}}>
      {children}
    </AppContext.Provider>
  );
}
export {AppContext};
export default ContextProvider;