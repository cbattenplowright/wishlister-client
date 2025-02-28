import React from 'react';
import { useState } from 'react';
import WishlistList from '../components/WishlistList';
import { wishlistItems } from '../mock-data/MockWishlists';

const WishlistContainer = () => {

    console.log(wishlistItems);
return (
    <>
        <WishlistList wishlistItems={wishlistItems}/>
    </>
)
};

export default WishlistContainer;