import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    console.log(quantity)

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
                    <Link className="navbar-item" to="/cart">
                        Cart 🛒{quantity}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar