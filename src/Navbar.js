export default function Navbar() {
    return <nav id="navbar">
        <a href="/home" id="navbar-title">Borgo Magliano</a>
        <ul>
            <CustomLink href="/news">Nyheter</CustomLink>
            <CustomLink href="/events">Eventer</CustomLink>
            <CustomLink href="/gallery">Galleri</CustomLink>
            <CustomLink href="/blog">Blogg</CustomLink>
            <CustomLink href="/chat">Chat</CustomLink>
            <CustomLink href="/member">Medlem</CustomLink>

        </ul>
    </nav>
}

function CustomLink ({ href, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}