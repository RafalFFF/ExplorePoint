import { useContext, useState, } from 'react'
import NavBar from './components/navBar/NavBar';
import ContextProvider from './context/Context';  
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';


const  App=()=> {

  
  return (
    
    <ContextProvider>
        <NavBar/>
    </ContextProvider>
  );
}

export default App;
