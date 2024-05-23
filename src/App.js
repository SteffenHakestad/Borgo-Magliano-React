import React from "react";
import Navbar from "./Navbar.js";
import MobileNavbar from "./MobileNavbar.js";
import Home from "./pages/Home.js";
import News from "./pages/News.js";
import Events from "./pages/Events.js";
import Gallery from "./pages/Gallery.js";
import Blog from "./pages/Blog.js";
import Chat from "./pages/Chat.js";
import Member from "./pages/Member.js";
import Dashboard from "./pages/Dashboard.js";
import AdminDashboard from "./pages/AdminDashboard.js";
import LanguageSwitcher from "./components/LanguageSwitcher.js";

import { Route, Routes } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <>
        <Navbar />
        <MobileNavbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/member" element={<Member />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
        <LanguageSwitcher />
      </>
    </I18nextProvider>
  );
}

export default App;





//OLD CODE, Keep for now
// function App() {
//   console.log(window.location)
//   let Component
//   switch(window.location.pathname) {
//     case "/":
//       Component = <Home/>
//       break
//     case "/news":
//       Component = <News/>
//       break
//     case "/events":
//       Component = <Events/>
//       break
//     case "/gallery":
//       Component = <Gallery/>
//       break
//     case "/blog":
//       Component = <Blog/>
//       break
//     case "/chat":
//       Component = <Chat/>
//       break
//     case "/member":
//       Component = <Member/>
//       break
//     default:
//       Component = <Home/>

      
//   }
//   return (
//     <>
//       <Navbar />
//       {Component}
//     </>
//   );
// }

// export default App;