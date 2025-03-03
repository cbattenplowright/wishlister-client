import React from 'react';
import WishlistProductList from '../components/wishlist-components/WishlistProductList';
import { wishlistProductItems } from '../mock-data/MockWishlistProducts';

const WishlistProductListContainer = () => {
    return (
        <div className="wishlist-product-list-container">
            <WishlistProductList wishlistProductItems={wishlistProductItems}/>
        </div>
    );
}

export default WishlistProductListContainer;