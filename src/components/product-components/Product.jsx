import react from 'react';

const Product = ({}) => {

    const wishlistProductItem = 
        {
            'productId': 1,
            'productName': "PlayStation 5",
            'price': 499,
            'url': "https://www.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG",
            'imageUrl' : "https://placehold.co/300",
            'priority' : "HIGH",
            'description' : "Next-gen gaming console with ultra-high speed SSD",
            'dateAdded' : "2025-03-03"
        }

        const handleSave = () => {
            console.log('Save button clicked');
        }
        const handleDelete = () => {
            console.log('Delete button clicked');
        }

    return ( 
        <div className='product'>
            <h1>{wishlistProductItem.productName}</h1>
            <img src={wishlistProductItem.imageUrl} alt="wishlist product" />
            <p>Price: {wishlistProductItem.price}</p>
            <p>Description: {wishlistProductItem.description}</p>
            <p>Where to purchase: {wishlistProductItem.url}</p>
            <p>Priority: {wishlistProductItem.priority}</p>
            <p>Added on {wishlistProductItem.dateAdded}</p>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleDelete}>Delete</button>
        </div> 
    );
}
 
export default Product;