import React from "react";
import Product from "../components/product-components/Product";
import './WishlistProductContainer.css';

const WishlistProductContainer = () => {
    return ( 
        <div className="wishlist-product-container">
            <h1>Wishlist Product Container</h1>
            <Product />
        </div>
    );
}
 
export default WishlistProductContainer;