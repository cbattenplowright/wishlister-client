import { useContext, createContext, useState } from 'react';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlistId, setWishlistId] = useState(null);

    const value = {
        wishlistId,
        setWishlistId
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