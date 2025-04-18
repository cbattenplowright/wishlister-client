import React, { useState } from "react";
import './NewWishlistModal.css';

const NewWishlistModal = ({ isOpen, handleModalClose, createNewWishlist }) => {

    const [wishlistName, setWishlistName] = useState(" ");

    const handleChange = (e) => {
        setWishlistName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting new wishlist");
        handleModalClose();
        createNewWishlist(wishlistName);
        // add save logic call to api
    }

    return (
        isOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>Create New Wishlist</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="wishlist-name">Wishlist Name</label>
                            <input
                                id="wishlist-name"
                                type="text"
                                onChange={handleChange}
                                value={wishlistName}
                                placeholder="Enter wishlist name"
                                required
                            />
                        </div>
                        <div className="modal-actions">
                            <button type="submit">Create Wishlist</button>
                            <button type="button" onClick={handleModalClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
}

export default NewWishlistModal;