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

            const response = await fetch (
                `https://wishlister-h2tf.onrender.com/api/wishlists/${auth.user.id}`,
                // `http://localhost:8080/api/wishlists/${auth.user.id}`,
                {
                    method: "GET",
                    headers: {
                        "Authorization": `Basic ${btoa(`${auth.user.email}:${auth.user.password}`)}`,
                        "Content-Type": "application/json",
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