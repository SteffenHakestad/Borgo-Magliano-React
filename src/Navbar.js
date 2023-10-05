import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return <nav id="navbar">
        <Link to="/home" id="navbar-title">Borgo Magliano</Link>
        <ul>
            <CustomLink to="/news">Nyheter</CustomLink>
            <CustomLink to="/events">Eventer</CustomLink>
            <CustomLink to="/gallery">Galleri</CustomLink>
            <CustomLink to="/blog">Blogg</CustomLink>
            <CustomLink to="/chat">Chat</CustomLink>
            <CustomLink to="/member">Medlem</CustomLink>

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