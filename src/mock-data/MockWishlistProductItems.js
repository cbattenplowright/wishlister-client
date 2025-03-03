import { mockWishlists } from './MockWishlists';
import { mockWishlistsProducts } from './MockProducts';

export const wishlistProductItems = [
    {
        wishlistProductId: 1,
        wishlist: mockWishlists[0],
        product: mockWishlistsProducts[0],
        isPurchased: false,
    },
    {
        wishlistProductId: 2,
        wishlist: mockWishlists[0],
        product: mockWishlistsProducts[1],
        isPurchased: true,
    },
    {
        wishlistProductId: 3,
        wishlist: mockWishlists[1],
        product: mockWishlistsProducts[2],
        isPurchased: false,
    },
    {
        wishlistProductId: 4,
        wishlist: mockWishlists[1],
        product: mockWishlistsProducts[3],
        isPurchased: true,
    },
    {
        wishlistProductId: 5,
        wishlist: mockWishlists[2],
        product: mockWishlistsProducts[4],
        isPurchased: false,
    }
];
