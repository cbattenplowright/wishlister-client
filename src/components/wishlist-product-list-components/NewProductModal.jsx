import React, { useState } from "react";
import './NewProductModal.css';

const NewProductModal = ({ isOpen, handleModalClose, createNewWishlistProduct }) => {

    const [product, setProduct] = useState(" ");

    const handleChange = (e) => {
        setWishlistName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting new wishlist");
        handleModalClose();
        createNewWishlistProduct(product);
        // add save logic call to api
    }

    return (
        isOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>Create New Product</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="product-name">Product Name</label>
                            <input
                                id="product-name"
                                type="text"
                                onChange={handleChange}
                                value={product.productName}
                                placeholder="Enter product name"
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

export default NewProductModal;