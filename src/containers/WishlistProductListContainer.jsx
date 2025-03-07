import React from 'react';
import WishlistProductList from '../components/wishlist-product-list-components/WishlistProductList';
import { mockWishlistProductItems } from '../mock-data/MockWishlistProductItems';

const WishlistProductListContainer = () => {

    const wishlistProductItems = mockWishlistProductItems;
    const wishlistProductItemsForWishlist1 = wishlistProductItems.filter((wishlistProductItem) => wishlistProductItem.wishlistId === 1);

    return (
        <div className="wishlist-product-list-container">
            <WishlistProductList wishlistProductItems={wishlistProductItemsForWishlist1} wishlistName={"Wishlist no.1"}/>
        </div>
    );
}

export default WishlistProductListContainer;