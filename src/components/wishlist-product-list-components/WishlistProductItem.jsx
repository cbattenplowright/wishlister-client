import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import './WishlistProductItem.css';

const WishlistProductItem = ({ wishlistProductItem }) => {

    // const styles = {
    //     wishlistProductItem: {
    //         backgroundColor: '#f5f5f5',
    //         padding: '15px',
    //         margin: '10px 0',
    //         borderRadius: '8px',
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'space-between',
    //         boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    //     },
    //     h2: {
    //         margin: 0,
    //         fontSize: '18px'
    //     },
    //     img: {
    //         width: '100px',
    //         height: '100px',
    //         objectFit: 'cover',
    //         borderRadius: '4px'
    //     },
    //     button: {
    //         border: 'none',
    //         borderRadius: '50%',
    //         background: '#d3d3d3',
    //         cursor: 'pointer',
    //         padding: '8px',
    //         width: '40px',
    //         height: '40px',
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center'
    //     }
    // }

    console.log(wishlistProductItem);

    return ( 
        <div className="wishlist-product-item">
            <img src="https://placehold.co/100" alt="photo of wishlist product" />
            <h2>{wishlistProductItem.productName}</h2>
            <p>£{wishlistProductItem.price}</p>
            <button>
                <ShareIcon />
            </button>
        </div>
    );
}
 
export default WishlistProductItem;