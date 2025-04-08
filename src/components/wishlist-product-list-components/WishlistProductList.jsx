import React from "react";
import WishlistProductItem from "./WishlistProductItem";
import './WishlistProductList.css';
import { useWishlist } from "../../hooks/WishlistProvider";

const WishlistProductList = ({ wishlistProductItems, wishlistName }) => {

    console.log('wishlistProductItems: ', wishlistProductItems);

    if (!wishlistProductItems || !wishlistProductItems.products) {
        return <div className="wishlist-product-list">Loading...</div>;
    }

    // console.log('wishlistProducts: ', wishlistProductItems.products);
    // const items = wishlistProductItems ? Object.values(wishlistProductItems) : [];

    // console.log('items: ', items);

    const wishlistProductItemsComponents = wishlistProductItems.products.map((product) => {
        return <WishlistProductItem 
            key={product.productId} 
            wishlistProductItem={product} 
        />;
    });

    

    return ( 
        <div className="wishlist-product-list">
            <h1>{wishlistProductItems.wishlistName || wishlistName}</h1>
            {wishlistProductItemsComponents}
        </div>
     );
}
 
export default WishlistProductList;