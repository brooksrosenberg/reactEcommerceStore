import React from 'react';
import '../components/Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
    const token = localStorage.getItem('token')

    return ( 
        <footer className='footer-body'>
            <div className='footer-container'>
                <div className='footer-row2'>
                    <p className='footer-col-sm'>
                        Copyright &copy;{new Date().getFullYear()} LIMITLESS REEFER INC | All Rights Reserved | Terms of Service | Privacy {token && <Link className='contact-link' to="/contact">| Contact</Link>}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;