function Navbar(){
    return(
        <nav className="nav">
            <a href="https://www.dndbeyond.com/" className="site-title">
                DND
            </a>
            <ul>
                <li className="active">
                    <a href="https://dnd.wizards.com/resources/character-sheets">character</a>
                </li>
                <li>
                    <a href="https://www.dndbeyond.com/homebrew/spells">skill</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar