import { Link, NavLink } from "react-router-dom"
import "./header.css"

const logo = "/assets/logo/logo.svg"

function Header() {
    
    return (
        <header className="header">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo du site SportSee." />
            </Link>

            <nav className="nav-container">
                <NavLink to="/" className="nav-content">Accueil</NavLink>
                <NavLink to="/Profil" className="nav-content">Profil</NavLink>
                <NavLink to="/" className="nav-content">Réglage</NavLink>
                <NavLink to="/" className="nav-content">Communauté</NavLink>
            </nav>
        </header>
    )
}

export default Header