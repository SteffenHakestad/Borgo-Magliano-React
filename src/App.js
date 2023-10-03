
import Navbar from "./Navbar.js";
import Home from "./pages/Home.js";
import News from "./pages/News.js";
import Events from "./pages/Events.js";
import Gallery from "./pages/Gallery.js";
import Blog from "./pages/Blog.js";
import Chat from "./pages/Chat.js";
import Member from "./pages/Member.js";


function App() {
  console.log(window.location)
  let Component
  switch(window.location.pathname) {
    case "/":
      Component = <Home/>
      break
    case "/news":
      Component = <News/>
      break
    case "/events":
      Component = <Events/>
      break
    case "/gallery":
      Component = <Gallery/>
      break
    case "/blog":
      Component = <Blog/>
      break
    case "/chat":
      Component = <Chat/>
      break
    case "/member":
      Component = <Member/>
      break
    default:
      Component = <Home/>

      
  }
  return (
    <>
      <Navbar />
      {Component}
    </>
  );
}

export default App;
