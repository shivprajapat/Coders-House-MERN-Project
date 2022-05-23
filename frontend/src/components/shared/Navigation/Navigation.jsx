import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../../Assets/images'
const Navigation = () => {
    return (
        <nav className='navbar container'>
            <Link className="brandStyle" to="/">
                <img src={logo} alt="logo" />
                <span className="logo-txt">Coders house</span>
            </Link>

        </nav>
    );
};

export default Navigation;