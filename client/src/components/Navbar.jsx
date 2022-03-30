import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <div className="navbar-search-container">
                        <input className="navbar-input"></input>
                        🔎
                    </div>
                </div>
                <div className="navbar-center">
                    <h1 className="logo">Craft
                    </h1>
                </div>
                <div className="navbar-right">
                    <Link className="navbar-item" to="/register">
                        Register
                    </Link>
                    <Link className="navbar-item" to="/signin">
                        Sign in
                    </Link>
                    <Link className="navbar-item" to="/cart">
                        Cart 🛒
                    </Link>
                    </div>
                </div>
            </div>
    )
}

export default Navbar