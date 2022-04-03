import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const clearStorage = () => {
        console.log('clear storage function')
        localStorage.clear()
        window.location.reload(false)
    }

    const quantity = useSelector(state=>state.cart.quantity)
    console.log(quantity)

    const token = localStorage.getItem('token')
    console.log(token)
    return (
        <div className='navbar-container'>
            <div className="navbar-wrapper">
                <div className="navbar-left">
                <Link className="navbar-item" to="/category">
                        Category  
                </Link>
                <Link className="navbar-item" to="/location">
                        Location  
                </Link>
                </div>
                <div className="navbar-center">
                    <h1 className="logo">Craft
                    </h1>
                </div>
                {/* //Conditional Navbar Rendering */}
                
                {token ? (
                    <div className="navbar-right">
                        <Link className="navbar-item" to="/">
                            Home
                        </Link>
                        <div className='navbar-item' onClick={clearStorage}>Sign Out</div>
                        <Link className="navbar-item" to="/cart">
                            Cart 🛒{quantity}
                        </Link>
                    </div>
                ) : (
                    <div className="navbar-right">
                        <Link className="navbar-item" to="/">
                            Home
                        </Link>
                        <Link className="navbar-item" to="/register">
                            Register
                        </Link>
                        <Link className="navbar-item" to="/signin">
                            Sign in
                        </Link>
                    </div>
                )}    
            </div>
        </div>
    )
}

export default Navbar