import React from 'react';
import { useState } from 'react';
import WishlistList from '../components/wishlist-components/WishlistList';
import { mockWishlistItems } from '../mock-data/MockWishlists';

const WishlistContainer = () => {

    console.log(mockWishlistItems);
    return (
        <>
            <WishlistList wishlistItems={mockWishlistItems}/>
        </>
    )
};

export default WishlistContainer;