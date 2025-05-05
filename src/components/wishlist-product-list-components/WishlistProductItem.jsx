import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import Switch from '@mui/material/Switch';
import './WishlistProductItem.css';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../../hooks/WishlistProvider';
import { useProduct } from '../../hooks/ProductProvider';

const WishlistProductItem = ({ wishlistProductItem, isShared, isOwner }) => {

    console.log(wishlistProductItem);

    const wishlistContext = useWishlist();
    const productContext = useProduct();
    const navigate = useNavigate();

    const label = { inputProps: { 'aria-label': 'Size switch demo' } };

    const handleClick = () => {
        try {
            console.log('WishlistProduct clicked:', wishlistProductItem);
            productContext.setProduct(wishlistProductItem);
            navigate(`/wishlist/${wishlistContext.wishlistId}/product/${wishlistProductItem.productId}`);
        } catch (err) {
            console.error('Error setting product:', err);
        }
    }

    return (
        <div className="wishlist-product-item">
            <button className="wishlist-product-item-button" onClick={handleClick}>
                <img src="https://placehold.co/100" alt="photo of wishlist product" />
                <h2>{wishlistProductItem.productName}</h2>
                <p>£{wishlistProductItem.price}</p>
                {/* Only show share button if not shared and is owner */}
                {!isShared && isOwner && (
                    <button>
                        <ShareIcon />
                    </button>
                )}
                <div onClick={(e) => e.stopPropagation()}>
                    <Switch {...label} defaultChecked />
                </div>
            </button>
        </div>
    );
}

export default WishlistProductItem;