import React from 'react';
import ShareIcon from '@mui/icons-material/Share';

const WishlistProductItem = ({ wishlistProductItem }) => {
    return ( 
        <div id="wishlist-product-item">
            <img src="https://placehold.co/100" alt="photo of wishlist product" />
            <h2>{wishlistProductItem.productName}</h2>
            <p>{wishlistProductItem.price}</p>
            <button>
                <ShareIcon />
            </button>
        </div>
    );
}
 
export default WishlistProductItem;