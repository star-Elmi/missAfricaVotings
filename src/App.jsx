import React from "react";
import { Header } from "./components/Header/Header";
import { Timer } from "./components/Timer/Timer";
import { Compotitors } from "./components/Compotitors/Compotitors";
import { VoteModal } from "./components/Modal/VoteModal";
import {Route , Routes } from "react-router";
import Home from "./pages/Home";
import './pages/about.css';
import './pages/contact.css';
// import './assets/logo.png';

import OurGellery from "./pages/OurGellery";
import Contact from "./pages/Contact";

// import Contact from "./pages/Contact";
// import OurGellery from "./pages/OurGellery";

export const App = () => {
  return (
<>
<Header />


<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/OurGellery" element={<OurGellery/>} />
        <Route path="/contact" element={<Contact/>} />
  </Routes>
   
      <Timer />
      <Compotitors />
      <VoteModal />
  
   
    </>
  );
};
