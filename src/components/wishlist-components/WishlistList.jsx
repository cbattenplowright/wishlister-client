import React from 'react';
import WishlistItem from './WishlistItem';

const WishlistList = ({wishlistItems}) => {

    const wishlistItemsComponents = wishlistItems?.map((wishlistItem) => {
        return <WishlistItem key={wishlistItem.wishlistId} wishlistItem={wishlistItem} />;
    });

    console.log(wishlistItemsComponents);

    return (
        <div id="wishlist-list">
            <h1>My Wishlists</h1>
            {wishlistItemsComponents}
        </div>
    )
};

export default WishlistList;