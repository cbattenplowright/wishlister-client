import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import './WishlistProductItem.css';
import { useNavigate } from 'react-router-dom';

const WishlistProductItem = ({ wishlistProductItem }) => {

    console.log(wishlistProductItem);

    const navigate = useNavigate();

    const handleClick = () => {
    }

    return (
        <div className="wishlist-product-item">
            <button className="wishlist-product-item-button" onClick={handleClick}>
                <img src="https://placehold.co/100" alt="photo of wishlist product" />
                <h2>{wishlistProductItem.productName}</h2>
                <p>£{wishlistProductItem.price}</p>
                <button>
                    <ShareIcon />
                </button>
            </button>
        </div>
    );
}

export default WishlistProductItem;