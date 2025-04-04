import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';
import './WishlistItem.css';
import { useWishlist } from '../../hooks/WishlistProvider';

const WishlistItem = ({ wishlistItem }) => {

    const wishlist = useWishlist();

    const navigate = useNavigate();

    const handleClick = () => {
        wishlist.setWishlistId(wishlistItem.wishlistId);
        alert(`Clicked on ${wishlistItem.wishlistName}`);
        navigate(`/wishlist/${wishlistItem.wishlistId}`);
    }

    return (
        <div className="wishlist-item">
            <button className="wishlist-item-button" onClick={handleClick}>
                <img src="https://placehold.co/100" alt="photo of wishlist" />
                <h2>{wishlistItem.wishlistName}</h2>
                <button className="share-button">
                    <ShareIcon />
                </button>
            </button>
        </div>
    )   
};

export default WishlistItem;