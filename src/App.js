import { useContext, useState, } from 'react'
import NavBar from './components/navBar/NavBar';
import ContextProvider from './context/Context';  
import Home from './pages/Home';
import Modal from './components/Modal/Modal';
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
        <Modal/>
        <NavBar/>
        <Home/>
    </ContextProvider>
  );
}

export default App;
