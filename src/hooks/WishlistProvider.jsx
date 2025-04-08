import { useContext, createContext, useState } from 'react';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlists, setWishlists] = useState(null);
    const [wishlistId, setWishlistId] = useState(null);

    const value = {
        wishlistId,
        setWishlistId,
        wishlists,
        setWishlists,
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}

export default WishlistProvider;

export const useWishlist = () => {
    return useContext(WishlistContext);
}