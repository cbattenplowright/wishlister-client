import React, { useEffect } from 'react';
import { useState } from 'react';
import WishlistList from '../components/wishlist-components/WishlistList';
import { mockWishlists } from '../mock-data/MockWishlists';
import { useAuth } from '../hooks/AuthProvider';
import { useWishlist } from '../hooks/WishlistProvider';
import { useLocation } from 'react-router-dom';

const WishlistContainer = () => {

    const wishlistContext = useWishlist();
    // const [wishlists, setWishlists] = useState(null);
    const auth = useAuth();
    const location = useLocation();

    const fetchWishlists = async () => {
        try {
            if (!auth.user){
                console.error("No user found");
                return;
            }

            console.log(`Fetching wishlists for user credentials:, ${auth.user.email}, ${auth.credentials}`);
            const response = await fetch (
                // `https://wishlister-h2tf.onrender.com/api/wishlists/${auth.user.userAccountId}`,
                `http://localhost:8080/api/wishlists/${auth.user.userAccountId}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Basic ${btoa(`${auth.user.email}:${auth.credentials}`)}`,
                    }
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const res = await response.json();
            if (res) {
                wishlistContext.setWishlists(res);
            }

        } catch (err) {
            console.error('Error fetching wishlists:', err);
        }
    }

    const createNewWishlist = async (wishlistName) => {
        try {
            if (!auth.user){
                console.error("No user found");
                return;
            }

            console.log(`Creating new wishlist for user credentials:, ${auth.user.email}, ${auth.credentials}`);
            const response = await fetch (
                // `https://wishlister-h2tf.onrender.com/api/wishlists/${auth.user.userAccountId}`,
                `http://localhost:8080/api/wishlists/new`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Basic ${btoa(`${auth.user.email}:${auth.credentials}`)}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userId: auth.user.userAccountId,
                        wishlistName: wishlistName,
                    })
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const res = await response.json();
            if (res) {
                wishlistContext.setWishlists([...wishlistContext.wishlists, res]);
            }

        } catch (err) {
            console.error('Error creating new wishlist:', err);
        }
    }

    useEffect(() => {
        if (auth.user) {
            console.log(auth.user);
            fetchWishlists();
        }
    }, [auth.user, location.pathname]);

    console.log('wishlists: ', wishlistContext.wishlists);
    return (
        <>
            <WishlistList wishlistItems={wishlistContext.wishlists} createNewWishlist={createNewWishlist}/>
        </>
    )
};

export default WishlistContainer;