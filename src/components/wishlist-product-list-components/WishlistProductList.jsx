import React from "react";
import WishlistProductItem from "./WishlistProductItem";
import './WishlistProductList.css';
import { useWishlist } from "../../hooks/WishlistProvider";

const WishlistProductList = ({ wishlistProductItems, wishlistName }) => {

    console.log('wishlistProductItems: ', wishlistProductItems);

    if (!wishlistProductItems || !wishlistProductItems.products) {
        return <div className="wishlist-product-list">Loading...</div>;
    }

    const wishlistProductItemsComponents = wishlistProductItems.products.map((product, index) => {
        return <WishlistProductItem 
            key={index} 
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