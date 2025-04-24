import React from 'react';
import AccountButton from './AccountButton';
import MenuButton from './MenuButton';
import LogOutButton from './LogOutButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const styles = {
        navbar: {
            backgroundColor: 'lightgray',
            top: 0,
            width: '97%',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        },
        h1: {
            color: 'black',
            margin: 0,
            fontSize: '24px'
        }
    }

    return (
        <div style={styles.navbar}>
            <MenuButton />
            <h1 style={styles.h1}>Wishlister</h1>
            <AccountButton />
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/wishlists">Wishlists</Link>
            <Link to="/shared-wishlists">Shared Wishlists</Link>
            <LogOutButton />
        </div>
    )
}

export default Navbar;