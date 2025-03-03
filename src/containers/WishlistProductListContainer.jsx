import React from 'react';
import WishlistProductList from '../components/wishlist-components/WishlistProductList';
import { wishlistProductItems } from '../mock-data/MockWishlistProducts';

const WishlistProductListContainer = () => {

    const wishlistProductItems = wishlistProductItems;
    const wishlistProductItemsForWishlist1 = wishlistProductItems.filter((wishlistProductItem) => wishlistProductItem.wishlistId === 1);

    return (
        <div className="wishlist-product-list-container">
            <WishlistProductList wishlistProductItems={wishlistProductItemsForWishlist1} wishlistName={"Wishlist no.1"}/>
        </div>
    );
}

export default WishlistProductListContainer;