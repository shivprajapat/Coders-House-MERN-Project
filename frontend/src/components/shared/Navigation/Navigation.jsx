import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../../Assets/images';
import styles from './navigation.module.css';

const Navigation = () => {
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center',
    };

    const logoText = {
        marginLeft: '10px',
    };
      return (
        <nav className={`${styles.navbar} container`}>
            <Link style={brandStyle} to="/">
                <img src={logo} alt="logo" />
                <span style={logoText}>Codershouse</span>
            </Link>
        </nav>
    );
};

export default Navigation;