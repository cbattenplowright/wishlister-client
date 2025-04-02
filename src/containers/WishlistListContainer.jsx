import React, { useEffect } from 'react';
import { useState } from 'react';
import WishlistList from '../components/wishlist-components/WishlistList';
import { mockWishlists } from '../mock-data/MockWishlists';
import { useAuth } from '../hooks/AuthProvider';

const WishlistContainer = () => {

    const [wishlists, setWishlists] = useState(null);
    const auth = useAuth();

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
                setWishlists(res);
            }

        } catch (err) {
            console.error('Error fetching wishlists:', err);
        }
    }

    useEffect(() => {
        if (auth.user) {
            console.log(auth.user);
            fetchWishlists();
        }
    }, [auth.user]);

    console.log(mockWishlists);
    return (
        <>
            <WishlistList wishlistItems={wishlists}/>
        </>
    )
};

export default WishlistContainer;