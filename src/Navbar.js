import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {

    return <nav id="navbar">
        {/*Links to home page from logo*/}
        <Link to="/home" id="navbar-title">Borgo Magliano</Link>
        {/*Links from navbar to all pages on app*/}
        <ul className="navbar-link-list">
            <CustomLink to="/news" className="navbar-link">Nyheter</CustomLink>
            <CustomLink to="/events" className="navbar-link">Eventer</CustomLink>
            <CustomLink to="/gallery" className="navbar-link">Galleri</CustomLink>
            <CustomLink to="/blog" className="navbar-link">Blogg</CustomLink>
            <CustomLink to="/chat" className="navbar-link">Chat</CustomLink>
            <CustomLink to="/member" className="navbar-link">Medlem</CustomLink>
            
            {/*
                Navbar links to dashboard and admin dashboard. Should not be accessible from navbar
                Do /dashboard or /admin in the url to access
                <CustomLink to="/dashboard" className="navbar-link">(temp)Dashboard</CustomLink>
                <CustomLink to="/admin" className="navbar-link">(temp)Admin Dashboard</CustomLink>
            */}

        </ul>
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
window.onscroll = function() {
    scrollFunction();
};
//If the page is scrolled, the navbar will shrink and the font size will decrease.
function scrollFunction() {
  var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollPosition > 90) {
    document.getElementById("navbar").style.height = "5rem";
    document.getElementById("navbar-title").style.fontSize = "4rem";
  } else {
    document.getElementById("navbar").style.height = "7rem";
    document.getElementById("navbar-title").style.fontSize = "5.5rem";
  }
}





//Below code was used to toggle between mobile and desktop navbar. Too much weird stuff happened, so I made one full size navbar and one mobile navbar.

// import React, { useState } from "react";
// import { Link, useMatch, useResolvedPath } from "react-router-dom"

// export default function Navbar() {
//     //Store mobile links visibility state
//     const [isMobileLinksVisible, setIsMobileLinksVisible] = useState(false);
//     //Toggle mobile links visibility
//     const toggleMobileLinks = () => {
//       setIsMobileLinksVisible(!isMobileLinksVisible);
//     };

//     return <nav id="navbar">
//         <Link to="/home" id="navbar-title">Borgo Magliano</Link>
//         {/*Links from navbar to all pages on app*/}
//         <ul className="navbar-link-list">
//             <CustomLink to="/news" className="navbar-link">Nyheter</CustomLink>
//             <CustomLink to="/events" className="navbar-link">Eventer</CustomLink>
//             <CustomLink to="/gallery" className="navbar-link">Galleri</CustomLink>
//             <CustomLink to="/blog" className="navbar-link">Blogg</CustomLink>
//             <CustomLink to="/chat" className="navbar-link">Chat</CustomLink>
//             <CustomLink to="/member" className="navbar-link">Medlem</CustomLink>
//         </ul>
//         {/*Code below only appears on 600px horizontal resolution or less */}
//         <div id="toggle-button" onClick={toggleMobileLinks}>
//             <span className="bar"></span>
//             <span className="bar"></span>
//             <span className="bar"></span>
//         </div>
//         {/*Same as <ul> above, only for mobile screens. Also has a visibility toggle*/}
//         <div id="navbar-mobile-links-container"
//         style={{ display: isMobileLinksVisible ? "flex" : "none" }}>
//             <ul className="navbar-mobile-link-list" onClick={toggleMobileLinks}>
//                 <CustomLink to="/news" className="navbar-mobile-link">Nyheter</CustomLink>
//                 <CustomLink to="/events" className="navbar-mobile-link">Eventer</CustomLink>
//                 <CustomLink to="/gallery" className="navbar-mobile-link">Galleri</CustomLink>
//                 <CustomLink to="/blog" className="navbar-mobile-link">Blogg</CustomLink>
//                 <CustomLink to="/chat" className="navbar-mobile-link">Chat</CustomLink>
//                 <CustomLink to="/member" className="navbar-mobile-link">Medlem</CustomLink>
//             </ul>
//         </div>
//     </nav>
// }

// function CustomLink ({ to, children, ...props}) {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true })
//     return (
//         <li className={isActive ? "active" : ""}>
//             <Link to={to} {...props}>{children}</Link>
//         </li>
//     )
// }
// window.onscroll = function() {
//     scrollFunction();
// };
  
// Set the original font size in rem
//var originalFontSize = 5.5;



// function applyFontSize() {
//   // Calculate the font size based on resolution
//   var newSize = calculateFontSize();
  
//   // Apply the calculated font size to the element
//   document.getElementById("navbar-title").style.fontSize = newSize + "rem";
// }

// window.onload = function () {
//   // Call the function when the page loads
//   document.getElementById("navbar").style.height = "7rem";
//   //applyFontSize();
// };

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
//   if (scrollPosition > 90) {
//     console.log("Page is not at the top");
//     document.getElementById("navbar").style.height = "5rem";
//   } else {
//     console.log("Page is at the top");
//     document.getElementById("navbar").style.height = "7rem";

//     // Reset to original font size when at the top
//     //document.getElementById("navbar-title").style.fontSize = originalFontSize + "rem";
//   }
// }

  
// vvvv This is a link to dashboard page. Should not be accessible from the navbar, but is here for testing purposes
//<CustomLink to="/dashboard" className="navbar-link">(temp)Dashboard</CustomLink>

//Function to detect if the page is scrolled.
//If the page is scrolled, the navbar will shrink and the font size will decrease.


// This was used to set font size based on resolution.
// function calculateFontSize() {
//   var screenWidth = window.innerWidth;
//   var percentage = 1;

//   // Adjust the percentage based on your resolution breakpoints
//   if (screenWidth <= 800) {
//     console.log("Screen is small");
//     percentage = 0.5; // Adjust as needed for smaller screens
//   } else if (screenWidth <= 1200) {
//     console.log("Screen is medium");
//     percentage = 0.9; // Adjust for medium screens
//   } else {
//     console.log("Screen is large");
//     percentage = 1; // Default for larger screens
//   }

//   return originalFontSize * percentage;
// }