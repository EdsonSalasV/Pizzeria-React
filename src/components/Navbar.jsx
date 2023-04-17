import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-danger">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Pizza de Don Cangrejo</NavLink>
                    
                    <div className="navbar" id="navbarNav">
                        <ul className="navbar-nav">                            
                            <li className="nav-item">
                                <NavLink className="nav-link" to="carrito">🛒 Carrito</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
