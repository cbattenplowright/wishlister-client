import react from 'react';
import { useState } from 'react';
import './Product.css';

const Product = ({}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [wishlistProductItem, setWishlistProductItem] = useState(
        {
            'productId': 1,
            'productName': "PlayStation 5",
            'price': 499,
            'url': "https://www.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG",
            'imageUrl' : "https://placehold.co/300",
            'priority' : "HIGH",
            'description' : "Next-gen gaming console with ultra-high speed SSD",
            'dateAdded' : "03-03-2025"
        });

        const handleEdit = () => {
            setIsEditing(true);
            console.log('Edit button clicked');
        };
        // const handleSave = () => {
        //     setIsEditing(false);
        //     console.log('Save button clicked');

        //     try {
        //     const updateProductApiCall = async () => { 
        //         const response = await fetch(
        //             `http://localhost:8080/api/products/${wishlistProductItem.productId}`,
        //             {
        //                 method: 'PUT',
        //                 headers: {
        //                     'Content-Type': 'application/json'
        //                 },
        //                 body: JSON.stringify(wishlistProductItem)
        //             }
        //         );

        //         if (!response.ok) {
        //             throw new Error(`HTTP error! status: ${response.status}`);
        //         }


        //     }
        // } catch (err) {
        //         console.error(`Error saving product:`, err);
        //     }

            // TODO: Add API call to update product
        
        const handleDelete = () => {
            console.log('Delete button clicked');
            // TODO: Add API call to delete product
        }
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setWishlistProductItem({
                ...wishlistProductItem,
                [name]: value
            });

    return ( 
        <div className='product'>
            {isEditing ? (
                <>
                    <p>Product Name: {' '}
                        <input 
                            type="text"
                            name="productName"
                            value={wishlistProductItem.productName}
                            onChange={handleInputChange}
                        />
                    </p>
                    <p>
                        Image URL: {' '}
                        <input
                            type="text"
                            name="imageUrl"
                            value={wishlistProductItem.imageUrl}
                            onChange={handleInputChange}
                        />
                    </p>
                    <p>
                        Price: {' '}
                        <input
                            type="number"
                            name="price"
                            value={wishlistProductItem.price}
                            onChange={handleInputChange}
                        />
                    </p>
                    <p>
                        Description: {''}
                        <textarea
                            name="description"
                            value={wishlistProductItem.description}
                            onChange={handleInputChange}
                        />
                    </p>
                    <p>
                        URL: {' '}
                        <input
                            type="text"
                            name="url"
                            value={wishlistProductItem.url}
                            onChange={handleInputChange}
                        />
                    </p>
                    <p>
                        Priority: {' '}
                        <select
                            name="priority"
                            value={wishlistProductItem.priority}
                            onChange={handleInputChange}
                        >
                            <option value="HIGH">High</option>
                            <option value="MEDIUM">Medium</option>
                            <option value="LOW">Low</option>
                        </select>
                    </p>
                </>
            ) : (
                <>
                    <h1>{wishlistProductItem.productName}</h1>
                    <img src={wishlistProductItem.imageUrl} alt="wishlist product" />
                    <p>Price: {wishlistProductItem.price}</p>
                    <p>Description: {wishlistProductItem.description}</p>
                    <p>Where to purchase: {wishlistProductItem.url}</p>
                    <p>Priority: {wishlistProductItem.priority}</p>
                    <p>Added on {wishlistProductItem.dateAdded}</p>
                </>
            )}

            {isEditing ? (
                <button onClick={handleSave}>Save</button> 
            ) : ( 
                <button onClick={handleEdit}>Edit</button> 
            )}
            <button onClick={handleDelete}>Delete</button>
        </div> 
    );
}
}
 
export default Product;