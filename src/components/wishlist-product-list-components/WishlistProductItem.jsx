import React from 'react';
import ShareIcon from '@mui/icons-material/Share';

const WishlistProductItem = ({ wishlistProductItem }) => {

    const styles = {
        wishlistProductItem: {
            backgroundColor: '#f5f5f5',
            padding: '15px',
            margin: '10px 0',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        },
        h2: {
            margin: 0,
            fontSize: '18px'
        },
        img: {
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '4px'
        },
        button: {
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            padding: '8px'
        }
    }

    return ( 
        <div id="wishlist-product-item" style={styles.wishlistProductItem}>
            <img style={styles.img} src="https://placehold.co/100" alt="photo of wishlist product" />
            <h2 style={styles.h2}>{wishlistProductItem.product.productName}</h2>
            <p>£{wishlistProductItem.product.price}</p>
            <button style={styles.button}>
                <ShareIcon />
            </button>
        </div>
    );
}
 
export default WishlistProductItem;