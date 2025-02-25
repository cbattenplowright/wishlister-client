import React from 'react';
import AccountButton from './AccountButton';

const Navbar = () => {
    const styles = {
        navbar: {
            backgroundColor: 'lightgray',
            top: 0,
            width: '90%',
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
            <h1 style={styles.h1}>Wishlister</h1>
            <AccountButton />
        </div>
    )
}

export default Navbar;