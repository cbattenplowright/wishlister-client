import React, { useState } from "react";
import './NewProductModal.css';

const NewProductModal = ({ isOpen, handleModalClose, createNewWishlistProduct }) => {

    const [product, setProduct] = useState({
        productName: "",
        price: "",
        url: "",
        imageUrl: "",
        prioritySelection: "",
        description: "",
        // TODO sort out the default properties of the new product for the modal
    });

    const options = [
        { value: "MUST_HAVE", label: "Must Have" },
        { value: "IMPORTANT", label: "Important" },
        { value: "NICE_TO_HAVE", label: "Nice To Have" },
        { value: "DESIRABLE", label: "Desirable" },
        { value: "NON_URGENT", label: "Non Urgent" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        })
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
                                name="productName"
                                type="text"
                                value={product.productName}
                                onChange={handleInputChange}
                                placeholder="Enter product name"
                                required
                            />
                            <label htmlFor="product-price">Product Price</label>
                            <input
                                id="product-price"
                                name="price"
                                type="number"
                                value={product.price}
                                onChange={handleInputChange}
                                placeholder="Enter product price"
                                required
                            />
                            <label htmlFor="product-description">Product Description</label>
                            <textarea
                                id="product-description"
                                name="description"
                                onChange={handleInputChange}
                                value={product.description}
                                placeholder="Enter product description"
                                required
                            />
                            <label htmlFor="product-image">Product Image URL</label>
                            <input
                                id="product-image"
                                name="imageUrl"
                                type="text"
                                onChange={handleInputChange}
                                value={product.imageUrl}
                                placeholder="Enter product image URL"
                                required
                            />
                            <label htmlFor="product-link">Product Link</label>
                            <input
                                id="product-link"
                                name="url"
                                type="text"
                                onChange={handleInputChange}
                                value={product.url}
                                placeholder="Enter product link"
                                required
                            />
                            <label htmlFor="product-priority">Product Priority</label>
                            <select
                                name="prioritySelection"
                                value={product.priority}
                                onChange={handleInputChange}
                            >
                                {options.map((option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
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