import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import './WishlistProductItem.css';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../../hooks/WishlistProvider';
import { useProduct } from '../../hooks/ProductProvider';

const WishlistProductItem = ({ wishlistProductItem }) => {

    console.log(wishlistProductItem);

    const wishlistContext = useWishlist();
    const productContext = useProduct();
    const navigate = useNavigate();

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
                <button>
                    <ShareIcon />
                </button>
            </button>
        </div>
    );
}

export default WishlistProductItem;