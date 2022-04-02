import React from 'react';
import '../components/Footer.css';

const Footer = () => {
    return ( 
        <footer className='footer-body'>
            <div className='footer-container'>
                <div className='footer-row2'>
                    <p className='footer-col-sm'>
                        Copyright &copy;{new Date().getFullYear()} LIMITLESS REEFER INC | All Rights Reserved | Terms of Service | Privacy
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;