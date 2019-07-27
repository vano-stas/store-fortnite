import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

function Header ({ counterAll }) {
    return (
        // <div className='header-app'>
        <nav className='navigation-app'>
            <Link className='logo-item' to='/'>
                <h3 className='logo-item'>Fortnite Store</h3>
            </Link>
            <ul className='nav-links-group'>
                <Link className='' to='/'>
                    <li className='page-link-item' >
                        <button className='btn btn btn-outline-warning button-item'>Home</button>
                    </li>
                </Link>
                <Link className='' to='/store'>
                <li className='page-link-item' >
                        <button className='btn btn btn-outline-warning button-item'>Catalog</button>
                    </li>
                </Link>
            </ul>
            <button className='btn btn-outline-light'><i class="fa fa-shopping-cart cart-item"></i> ({counterAll}) </button>
        </nav>

            
        // </div>
    )
};

export default Header;