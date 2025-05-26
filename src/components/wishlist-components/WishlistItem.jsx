import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";
import "./WishlistItem.css";
import { useWishlist } from "../../hooks/WishlistProvider";
import { useAuth } from "../../hooks/AuthProvider";
import ShareModal from "./ShareModal";

const WishlistItem = ({ wishlistItem }) => {
  const wishlistContext = useWishlist();
  const auth = useAuth();
  const navigate = useNavigate();
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const handleClick = () => {
    try {
      console.log("WishlistItem clicked:", wishlistItem);
      wishlistContext.setWishlistId(wishlistItem.wishlistId);
      console.log("Setting Wishlist context with Id", wishlistItem.wishlistId);
      navigate(`/wishlist/${wishlistItem.wishlistId}`);
    } catch (error) {
      console.error("Error setting wishlist:", error);
    }
  };

  const handleModalOpen = (e) => {
    e.stopPropagation(); // Prevent the click from propagating to the button
    setShareModalOpen(true);
  }

  const handleModalClose = () => {
    setShareModalOpen(false);
  }

  return (
    <div className="wishlist-item">
      <button className="wishlist-item-button" onClick={handleClick}>
        <img src="https://placehold.co/100" alt="photo of wishlist" />
        <h2>{wishlistItem.wishlistName}</h2>
        <h2>{wishlistItem.wishlistId}</h2>
        {auth.user.userAccountId === wishlistItem.userId && (
          <button className="share-button" onClick={handleModalOpen}>
            <ShareIcon/>
          </button>
        )}
      </button>
      <ShareModal
        isOpen={shareModalOpen}
        handleModalClose={handleModalClose}
      />
    </div>
  );
};

export default WishlistItem;
