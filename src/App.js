import React from "react";
import Navbar from "./Navbar.js";
import MobileNavbar from "./MobileNavbar.js";
import Home from "./pages/Home.js";
import Serivces from "./pages/Serivces.js";
import Media from "./pages/Media.js";
import Contact from "./pages/Contact.js";
import Admin from "./pages/Admin.js";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <>
        <Navbar />
        <MobileNavbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Serivces />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </>
  );
}

export default App;

