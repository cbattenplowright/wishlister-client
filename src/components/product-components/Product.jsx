import react, { useEffect } from "react";
import { useState } from "react";
import "./Product.css";
import { useAuth } from "../../hooks/AuthProvider";

const Product = ({ product, updateProduct }) => {
  const auth = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [productItem, setProductItem] = useState(product);
  const options = [
    { value: "MUST_HAVE", label: "Must Have" },
    { value: "IMPORTANT", label: "Important" },
    { value: "NICE_TO_HAVE", label: "Nice To Have" },
    { value: "DESIRABLE", label: "Desirable" },
    { value: "NON_URGENT", label: "Non Urgent" },
  ];

  // (
  //     {
  //         'productId': 2,
  //         'productName': "PlayStation 5",
  //         'price': 499,
  //         'url': "https://www.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG",
  //         'imageUrl': "https://placehold.co/300",
  //         'priority': "HIGH",
  //         'description': "Next-gen gaming console with ultra-high speed SSD",
  //         'dateAdded': "03-03-2025"
  //     });

  const handleEdit = () => {
    setIsEditing(true);
    console.log("Edit button clicked");
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Save button clicked");
    updateProduct(productItem);
  };

  // TODO: Add API call to update product

  const handleDelete = () => {
    console.log("Delete button clicked");
    // TODO: Add API call to delete product
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductItem({
      ...productItem,
      [name]: value,
    });
  };

  console.log("Product component rendering with productItem:", productItem);
  console.log("Product name is: ", productItem.productName);

  useEffect(() => {
    setProductItem(product);
  }, [product]);

  return (
    <div className="product">
      <h1>Product</h1>
      {isEditing ? (
        <>
          <p>
            Product Name:{" "}
            <input
              type="text"
              name="productName"
              value={productItem.productName}
              onChange={handleInputChange}
            />
          </p>
          <p>
            Image URL:{" "}
            <input
              type="text"
              name="imageUrl"
              value={productItem.imageUrl}
              onChange={handleInputChange}
            />
          </p>
          <p>
            Price:{" "}
            <input
              type="number"
              name="price"
              value={productItem.price}
              onChange={handleInputChange}
            />
          </p>
          <p>
            Description: {""}
            <textarea
              name="description"
              value={productItem.description}
              onChange={handleInputChange}
            />
          </p>
          <p>
            URL:{" "}
            <input
              type="text"
              name="url"
              value={productItem.url}
              onChange={handleInputChange}
            />
          </p>
          <p>
            Priority:{" "}
            <select
              name="prioritySelection"
              value={productItem.prioritySelection}
              onChange={handleInputChange}
            >
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </p>
        </>
      ) : (
        <>
          <h1>{productItem.productName}</h1>
          <img src={productItem.imageUrl} alt="wishlist product" />
          <p>Price: {productItem.price}</p>
          <p>Description: {productItem.description}</p>
          <p>Where to purchase: {productItem.url}</p>
          <p>Priority: {productItem.prioritySelection}</p>
          <p>Added on {productItem.dateAdded}</p>
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
};

export default Product;
