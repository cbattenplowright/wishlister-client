import React from "react";
import WishlistProductItem from "./WishlistProductItem";

const WishlistProductList = ({ wishlistProductItems, wishlistName }) => {

    const wishlistProductItemsComponents = wishlistProductItems?.map((wishlistProductItem) => {
        return <WishlistProductItem key={wishlistProductItem.wishlistProductId} wishlistProductItem={wishlistProductItem} />;
    });

    return ( 
        <div id="wishlist-product-list">
            <h1>{wishlistName}</h1>
            {wishlistProductItemsComponents}
        </div>
     );
}
 
export default WishlistProductList;