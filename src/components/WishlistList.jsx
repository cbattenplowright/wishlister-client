import React from 'react';

const WishlistList = ({wishlistItems}) => {

    const wishlistItemsComponents = wishlistItems?.map((wishlistItem) => {
        return <WishlistItem key={wishlistItem.wishlistId} wishlistItem={wishlistItem} />;
    });

    return (
        <>
            <h1>Wishlists</h1>
            <WishlistItems wishlistItemsComponents={wishlistItemsComponents} />
            
        </>
    )
};

export default WishlistList;