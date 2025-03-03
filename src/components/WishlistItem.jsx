import React from 'react';
import ShareIcon from '@mui/icons-material/Share';

const WishlistItem = ({ wishlistItem }) => {
    return (
        <div className="wishlist-item">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
            <h2>{wishlistItem.wishlistName}</h2>
            <button>
                <ShareIcon />
            </button>
        </div>
    )   
};

export default WishlistItem;