import { useContext, useState, } from 'react'
import NavBar from './components/navBar/NavBar';
import './App.scss';
import ContextProvider from './context/Context';

import {AppContext} from './context/Context';

const  App=()=> {

  
  return (
    <ContextProvider>
        <NavBar/>
    </ContextProvider>
  );
}

export default App;
