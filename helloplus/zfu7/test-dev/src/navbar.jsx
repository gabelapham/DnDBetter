function Navbar(){
    return(
        <nav className="nav">
            <a href="/" className="site-title">
                DND
            </a>
            <ul>
                <li className="active">
                    <a href="/character">character</a>
                </li>
                <li>
                    <a href="/skill">skill</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar