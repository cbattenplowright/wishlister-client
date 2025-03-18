import { mockUsers } from "./MockUsers";
import { mockProducts } from "./MockProducts";

export const mockWishlists = [
    {
        'wishlistId': 1,
        'owner': mockUsers[0],
        'wishlistName': 'Wishlist no.1',
        'wishlistProducts': mockWishlistProductItems[0,1,2]
    },
    {
        'wishlistId': 2,
        'owner': mockUsers[0],
        'wishlistName': 'Wishlist no.2',
        'products': mockProducts[4,5]
    },
    {
        'wishlistId': 3,
        'owner': mockUsers[0],
        'wishlistName': 'Wishlist no.3',
        'products': null
    }
];