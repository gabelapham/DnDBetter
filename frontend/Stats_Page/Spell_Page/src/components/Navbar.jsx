import "./Navbar.css";
import logo from "../assets/logo.jpg"

function Navbar(){
    return(
        <>
            <nav>
                <a href="index.html">
                    <img className="logo" src={logo} alt="logo" />
                </a>

                <div>
                    <ul className="link">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html">character</a></li>
                        <li><a href="index.html">items</a></li>
                    </ul>
                </div>
            
            </nav>

        </>
    )

}

export default Navbar