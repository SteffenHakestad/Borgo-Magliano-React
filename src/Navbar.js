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
            <CustomLink to="/dashboard" className="navbar-link">(temp)Dashboard</CustomLink>
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