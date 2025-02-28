import { Link } from "react-router-dom"
import "./header.css"

const logo = "/assets/logo/logo.svg"

function Header() { 
    return (
        <header className="header">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo du site SportSee." />
            </Link>

            <nav className="nav-container">
                <Link to="/" className="nav-content">Accueil</Link>
                <Link to="/user/:id" className="nav-content">Profil</Link>
                <Link to="/settings" className="nav-content">Réglages</Link>
                <Link to="/" className="nav-content">Communauté</Link>
            </nav>
        </header>
    )
}

export default Header