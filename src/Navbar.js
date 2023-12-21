import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return <nav id="navbar">
        <Link to="/home" id="navbar-title">Borgo Magliano</Link>
        <ul>
            <CustomLink to="/news" className="navbar-link">Nyheter</CustomLink>
            <CustomLink to="/events" className="navbar-link">Eventer</CustomLink>
            <CustomLink to="/gallery" className="navbar-link">Galleri</CustomLink>
            <CustomLink to="/blog" className="navbar-link">Blogg</CustomLink>
            <CustomLink to="/chat" className="navbar-link">Chat</CustomLink>
            <CustomLink to="/member" className="navbar-link">Medlem</CustomLink>
        </ul>
        <div id="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        <div id="navbar-mobile-links">
            <ul>
                <CustomLink to="/news" className="navbar-link">Nyheter</CustomLink>
                <CustomLink to="/events" className="navbar-link">Eventer</CustomLink>
                <CustomLink to="/gallery" className="navbar-link">Galleri</CustomLink>
                <CustomLink to="/blog" className="navbar-link">Blogg</CustomLink>
                <CustomLink to="/chat" className="navbar-link">Chat</CustomLink>
                <CustomLink to="/member" className="navbar-link">Medlem</CustomLink>
            </ul>
        </div>
    </nav>
}

function CustomLink ({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}
//Function to detect if the page is scrolled.
window.onscroll = function() {scrollFunction()};

let originalFontSize = 5.5;
//If the page is scrolled, the navbar will shrink and the font size will decrease.
function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    console.log("Page is not at the top")
    document.getElementById("navbar").style.height = "5rem";
    let newFontSize = originalFontSize * 0.7;
    document.getElementById("navbar-title").style.fontSize = newFontSize + "rem";
    document.getElementById("toggle-button").style.marginTop = "0rem";

  } else {
    console.log("Page is at the top")
    document.getElementById("navbar").style.height = "7rem";
    document.getElementById("navbar-title").style.fontSize = originalFontSize + "rem";
    document.getElementById("toggle-button").style.marginTop = "1rem";


  }
} 
// vvvv This is a link to dashboard page. Should not be accessible from the navbar, but is here for testing purposes
//<CustomLink to="/dashboard" className="navbar-link">(temp)Dashboard</CustomLink>
