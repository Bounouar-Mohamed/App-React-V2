import {
  BrowserRouter as
    Router,
  Routes,
  Route
} from "react-router-dom";
import UsersTable from './Pages/Users';
import Acceuil from './Pages/acceuil';
import Profile from "./Pages/profile"
import Navigation from "./Navbar/Navigation";
import Inscription from "./Pages/inscription";
import Connexion from './Pages/Connexion';
import Desktop from "./Apploye/templates/Dashboard-Desktop";
import { useMediaQuery } from 'react-responsive'
import Phone from "./Apploye/templates/Dashboard-Phone";
import { useState } from "react";
import { FieldNamesMarkedBoolean } from "react-hook-form";
import useEffect from 'react';


function App() {

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


  return (


    <div>

      <Navigation />


      <Routes>

        <Route path="/" element={<Acceuil />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/users" element={<UsersTable />} />
        {isDesktopOrLaptop ?
          <Route path="/apploye" element={<Desktop />} />
          :  <Route path="/apploye" element={<Phone />} />}
        <Route path="/connexion" element={<Connexion email={""} password={""} />} />


      </Routes>

    </div>



  )
}


export default App;

