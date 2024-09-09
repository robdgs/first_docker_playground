import React from 'react';
import './App.css';

import Navbar from "./Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import ContatoreFondiKeplera from "./context/ContatoreFondiKeplera";
import Books from "./Books/Books";
import CharactersListTS from "./CharactersListTS/CharacterListTS";
import Login from "./Login/Login";

function App() {
    const form = localStorage.getItem("key")

/*
   const formObject = (form !== null) ? JSON.parse(form) : null
    const isAdmin = formObject?.role === "admin"*/

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/fondi" element={<Dashboard><ContatoreFondiKeplera/></Dashboard>}/>
                <Route path="/personaggi" element={<Dashboard><CharactersListTS/></Dashboard>}/>
                {/*isAdmin  &&*/} <Route path="/libri" element={<Dashboard><Books/></Dashboard>}/>
                <Route path="/login" element={<Dashboard><Login/></Dashboard>}/>
                <Route path="/" element={<Dashboard><div>Ciao sono la home</div></Dashboard>}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
