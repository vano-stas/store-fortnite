import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

function Header () {
    return (
        // <div className='header-app'>
        <nav className='navigation-app'>
            <Link className='page-link-item' to='/'>
                <h3 className='page-link-item'>Fortnite Store</h3>
            </Link>
            <ul className='nav-links-group'>
                <Link className='page-link-item' to='/'>
                    <li className='page-link-item' >Home</li>
                </Link>
                <Link className='page-link-item' to='/store'>
                    <li className='page-link-item' >Catalog</li>
                </Link>
            </ul>
        </nav>

            
        // </div>
    )
};

export default Header;