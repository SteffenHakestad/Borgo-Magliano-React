import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useTranslation } from 'react-i18next';


export default function MobileNavbar() {
    const { t } = useTranslation();
    const [isMobileLinksVisible, setIsMobileLinksVisible] = useState(false);

    const toggleMobileLinks = () => {
      setIsMobileLinksVisible(!isMobileLinksVisible);
    };
    
    return <nav id="mobile-navbar">
        <Link to="/home" id="mobile-navbar-title">Borgo Magliano</Link>
        
        {/*Button to toggle links to other pages.*/}
        <div id="toggle-button" onClick={toggleMobileLinks}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>

        {/*Links from navbar to all pages on app*/}
        <div id="navbar-mobile-links-container"
        style={{ display: isMobileLinksVisible ? "flex" : "none" }}>
            <ul className="navbar-mobile-link-list" onClick={toggleMobileLinks}>
                <CustomLink to="/news" className="navbar-mobile-link">{t('news')}</CustomLink>
                <CustomLink to="/events" className="navbar-mobile-link">{t('events')}</CustomLink>
                <CustomLink to="/gallery" className="navbar-mobile-link">{t('gallery')}</CustomLink>
                <CustomLink to="/blog" className="navbar-mobile-link">{t('blog')}</CustomLink>
                <CustomLink to="/chat" className="navbar-mobile-link">{t('chat')}</CustomLink>
                <CustomLink to="/member" className="navbar-mobile-link">{t('member')}</CustomLink>
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
