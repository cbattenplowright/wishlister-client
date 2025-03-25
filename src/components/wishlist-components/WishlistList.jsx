import React from 'react';
import WishlistItem from './WishlistItem';
import './WishlistList.css';

const WishlistList = ({wishlistItems}) => {

    const wishlistItemsComponents = wishlistItems?.map((wishlistItem) => {
        return <WishlistItem key={wishlistItem.wishlistId} wishlistItem={wishlistItem} />;
    });

    console.log(wishlistItemsComponents);

    return (
        <div className="wishlist-list">
            <h1>My Wishlists</h1>
            {wishlistItemsComponents}
        </div>
    )
};

export default WishlistList;