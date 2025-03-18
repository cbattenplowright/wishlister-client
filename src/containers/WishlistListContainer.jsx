import React from 'react';
import { useState } from 'react';
import WishlistList from '../components/wishlist-components/WishlistList';
import { mockWishlists } from '../mock-data/MockWishlists';

const WishlistContainer = () => {

    console.log(mockWishlists);
    return (
        <>
            <WishlistList wishlistItems={mockWishlists}/>
        </>
    )
};

export default WishlistContainer;