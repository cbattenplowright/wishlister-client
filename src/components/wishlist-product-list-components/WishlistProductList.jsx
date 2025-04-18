import React, { useState } from "react";
import WishlistProductItem from "./WishlistProductItem";
import './WishlistProductList.css';
import NewProductModal from "./NewProductModal";
import { useWishlist } from "../../hooks/WishlistProvider";

const WishlistProductList = ({ wishlistProductItems, wishlistName, createNewWishlistProduct }) => {

    const [modalOpen, setModalOpen] = useState(false);

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

    const handleModalOpen = () => {
        setModalOpen(true);
    }

    const handleModalClose = () => {
        setModalOpen(false);
    }

    const triggerNewProductModal = () => {
        console.log("Triggering new product modal");
        handleModalOpen();
    }

    return (
        <div className="wishlist-product-list">
            <h1>{wishlistProductItems.wishlistName || wishlistName}</h1>
            <button onClick={triggerNewProductModal}>Add Product</button>
            <NewProductModal isOpen={modalOpen} handleModalClose={handleModalClose} createNewWishlistProduct={createNewWishlistProduct}/>
            {wishlistProductItemsComponents}
        </div>
    );
}

export default WishlistProductList;