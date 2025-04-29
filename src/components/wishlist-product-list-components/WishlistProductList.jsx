import React, { useState } from "react";
import WishlistProductItem from "./WishlistProductItem";
import './WishlistProductList.css';
import NewProductModal from "./NewProductModal";
import { useWishlist } from "../../hooks/WishlistProvider";
import { useAuth } from "../../hooks/AuthProvider";

const WishlistProductList = ({ wishlistProductItems, wishlistName, createNewWishlistProduct, handleDelete, isShared = false }) => {

    const auth = useAuth();
    const [modalOpen, setModalOpen] = useState(false);

    console.log('wishlistProductItems: ', wishlistProductItems);

    if (!wishlistProductItems || !wishlistProductItems.products) {
        return <div className="wishlist-product-list">Loading...</div>;
    }

    const wishlistProductItemsComponents = wishlistProductItems.products.map((product, index) => {
        return <WishlistProductItem
            key={index}
            wishlistProductItem={product}
            isShared={isShared}
            isOwner={auth.user.userAccountId === wishlistProductItems.userId}
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
            {auth.user.userAccountId === wishlistProductItems.userId ? (
                <>
                    <h1>{wishlistProductItems.wishlistName || wishlistName}</h1>
                    <button onClick={triggerNewProductModal}>Add Product</button>
                </>
            ) : (
                // TODO Add in to sharedWishlist the shared wishlist owners name to display rather than the userId
                <h1>{`${wishlistProductItems.wishlistName} shared by ${wishlistProductItems.userId}`}</h1>
            )}
            <NewProductModal
                isOpen={modalOpen}
                handleModalClose={handleModalClose}
                createNewWishlistProduct={createNewWishlistProduct}
            />
            {wishlistProductItemsComponents}
            {/* Add in context handler of wishlistProvider isShared context */}
            {auth.user.userAccountId === wishlistProductItems.userId
                ?
                <button onClick={handleDelete}>Delete</button>
                :
                null}
        </div>
    );
}

export default WishlistProductList;