import { mockProducts } from './MockProducts';

export const mockWishlistProductItems = [
    {
        wishlistProductId: 1,
        wishlistId: 1,
        product: mockProducts[0],
        isPurchased: false,
    },
    {
        wishlistProductId: 2,
        wishlistId: 1,
        product: mockProducts[1],
        isPurchased: true,
    },
    {
        wishlistProductId: 3,
        wishlistId: 1,
        product: mockProducts[2],
        isPurchased: false,
    },
    {
        wishlistProductId: 4,
        wishlistId: 2,
        product: mockProducts[3],
        isPurchased: true,
    },
    {
        wishlistProductId: 5,
        wishlistId: 2,
        product: mockProducts[4],
        isPurchased: false,
    }
];
