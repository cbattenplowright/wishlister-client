import React from 'react';
import { useState } from 'react';
import WishlistList from '../components/WishlistList';

const WishlistContainer = () => {

    const wishlistItems = [
        {
            'wishlistId': 1,
            'userId': 'e88ec5cb-42f5-4c14-bcc3-cef8eb2b894c',
            'wishlistName': 'Wishlist no.1'
        },
        {
            'wishlistId': 2,
            'userId': 'e88ec5cb-42f5-4c14-bcc3-cef8eb2b894c',
            'wishlistName': 'Wishlist no.2'
        },
        {
            'wishlistId': 3,
            'userId': 'e88ec5cb-42f5-4c14-bcc3-cef8eb2b894c',
            'wishlistName': 'Wishlist no.3',
        }
    ]

return (
    <>
        <WishlistList wishlistItems={wishlistItems}/>
    </>
)
};

export default WishlistContainer;