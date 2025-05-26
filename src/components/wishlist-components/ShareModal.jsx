import React, { useState } from "react";
import "./ShareModal.css";
import { useAuth } from "../../hooks/AuthProvider";
import { useWishlist } from "../../hooks/WishlistProvider";

const ShareModal = ({ isOpen, handleModalClose }) => {
  const [email, setEmail] = useState("");
  const auth = useAuth();
  const wishlistContext = useWishlist();

  const shareWishlistFetch = async (email) => {
    try {
      const response = await fetch(
        // `https://wishlister-h2tf.onrender.com/api/wishlists/${auth.user.userAccountId}/${wishlistContext.wishlistId}/share?${email}`,
        `http://localhost:8080/api/wishlists/${auth.user.userAccountId}/${wishlistContext.wishlistId}/share?email=${email}`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(
              `${auth.user.email}:${auth.credentials}`
            )}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();
      if (res) {
        console.log("Wishlist shared successfully:", res);
      }
    } catch (error) {
      console.error("Error sharing wishlist:", error);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting share wishlist with email:", email);
    // Here you would typically call an API to send the invite
    shareWishlistFetch(email);
    // Close the modal after submission
    handleModalClose();
    // Reset email field after submission
    setEmail("");
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Share Wishlist</h2>
          <p>Share your wishlist with friends and family!</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                onChange={handleChange}
                value={email}
                placeholder="Enter email to share with"
                required
              />
            </div>
            <div className="modal-actions">
              <button type="submit">Send Invite</button>
              <button type="button" onClick={handleModalClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default ShareModal;
