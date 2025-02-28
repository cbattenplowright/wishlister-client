import React from 'react';

const WishlistList = () => {

    const wishlistItemsComponents = wishlistItems?.map((wishlistItem) => {
        return <WishlistItem key={wishlistItem.id} productItem={wishlistItem} />;
    });

    return (
        <>
            <h1>Wishlists</h1>
            
        </>
    )
};

export default WishlistList;