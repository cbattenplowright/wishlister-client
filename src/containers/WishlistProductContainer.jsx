import React from "react";
import Product from "../components/product-components/Product";
import './WishlistProductContainer.css';

const WishlistProductContainer = () => {
    return ( 
        <div className="wishlist-product-container">
            <Product />
        </div>
    );
}
 
export default WishlistProductContainer;