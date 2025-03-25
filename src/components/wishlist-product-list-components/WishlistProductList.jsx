import React from "react";
import WishlistProductItem from "./WishlistProductItem";
import './WishlistProductList.css';

const WishlistProductList = ({ wishlistProductItems, wishlistName }) => {

    const wishlistProductItemsComponents = wishlistProductItems?.map((wishlistProductItem) => {
        return <WishlistProductItem key={wishlistProductItem.wishlistProductId} wishlistProductItem={wishlistProductItem} />;
    });

    return ( 
        <div className="wishlist-product-list">
            <h1>{wishlistName}</h1>
            {wishlistProductItemsComponents}
        </div>
     );
}
 
export default WishlistProductList;