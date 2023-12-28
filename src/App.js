
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
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/member" element={<Member />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
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