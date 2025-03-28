import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';
import './WishlistItem.css';

const WishlistItem = ({ wishlistItem }) => {

    const navigate = useNavigate();

    const handleClick = () => {
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