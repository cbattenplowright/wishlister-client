import React from 'react';
import WishlistItem from './WishlistItem';
import './WishlistList.css';
import { useState } from 'react';
import NewWishlistModal from './NewWishlistModal';

const WishlistList = ({ wishlistItems, createNewWishlist, isShared = false }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const wishlistItemsComponents = wishlistItems?.map((wishlistItem) => {
        return <WishlistItem key={wishlistItem.wishlistId} wishlistItem={wishlistItem} />;
    });

    console.log(wishlistItemsComponents);

    const handleModalOpen = () => {
        setModalOpen(true);
    }

    const handleModalClose = () => {
        setModalOpen(false);
    }

    const triggerNewWishlistModal = () => {
        console.log("Triggering new wishlist modal");
        handleModalOpen();
        // Logic to trigger the new wishlist modal
        // This could be a state update or a function call to open a modal component
    }
    return (
        <div className="wishlist-list">
            <h1>{isShared ? 'Shared Wishlists' : 'My Wishlists'}</h1>
            {!isShared && (
                <>
                    <button onClick={triggerNewWishlistModal}>
                        New Wishlist
                    </button>
                    <NewWishlistModal 
                        isOpen={modalOpen}
                        handleModalClose={handleModalClose}
                        createNewWishlist={createNewWishlist}
                    />
                </>
            )}
            {wishlistItemsComponents}
        </div>
    )
};

export default WishlistList;