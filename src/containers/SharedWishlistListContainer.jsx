import React, { useState } from 'react';
import { useAuth } from '../hooks/AuthProvider';
import { useWishlist } from '../hooks/WishlistProvider';
import WishlistList from '../components/wishlist-components/WishlistList';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const SharedWishlistListContainer = () => {
    const wishlistContext = useWishlist();
    const auth = useAuth();

    const fetchSharedWishlists = async () => {
        try {
            const response = await fetch(
                 // `https://wishlister-h2tf.onrender.com/api/shared-wishlists/${auth.user.userAccountId}`,
                 `http://localhost:8080/api/shared-wishlists/${auth.user.userAccountId}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Basic ${btoa(`${auth.user.email}:${auth.credentials}`)}`,
                    }
                }
            )

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const res = await response.json();
            if (res) {
                wishlistContext.setWishlists(res);
            }
        } catch (err) {
            console.error('Error fetching shared wishlists:', err);
        }
    }

    useEffect(() => {
        if (auth.user) {
            fetchSharedWishlists();
        }
    }, [auth.user, location.pathname]);

    return ( 
        <>
            <WishlistList wishlistItems={wishlistContext.wishlists} />ƒ
        </> );
}
 
export default SharedWishlistListContainer;