import React from 'react'
import './navbar.css'

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
                    <div className="navbar-item">
                        REGISTER
                    </div>
                    <div className="navbar-item">
                        SIGN IN
                    </div>
                    <div className="navbar-item">
                        CART 🛒
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar