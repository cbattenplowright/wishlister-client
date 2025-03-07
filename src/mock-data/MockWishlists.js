import { mockUsers } from "./MockUsers";
import { mockProducts } from "./MockProducts";

export const mockWishlists = [
    {
        'wishlistId': 1,
        'user': mockUsers[0],
        'wishlistName': 'Wishlist no.1',
        'products': mockProducts[0,1,2]
    },
    {
        'wishlistId': 2,
        'user': mockUsers[0],
        'wishlistName': 'Wishlist no.2'
    },
    {
        'wishlistId': 3,
        'user': mockUsers[0],
        'wishlistName': 'Wishlist no.3',
    }
];