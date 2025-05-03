import React, { useState } from "react";
import { useAuth } from "../hooks/AuthProvider";
import { useWishlist } from "../hooks/WishlistProvider";
import WishlistList from "../components/wishlist-components/WishlistList";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { usePendingShare } from "../hooks/PendingShareProvider";

const SharedWishlistListContainer = () => {
  const { pendingShares } = usePendingShare();
  const wishlistContext = useWishlist();
  const auth = useAuth();

  const fetchSharedWishlists = async () => {
    try {
      const response = await fetch(
        // `https://wishlister-h2tf.onrender.com/api/shared-wishlists/${auth.user.userAccountId}`,
        `http://localhost:8080/api/shared-wishlists/${auth.user.userAccountId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa(
              `${auth.user.email}:${auth.credentials}`
            )}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();
      if (res) {
        wishlistContext.setWishlists(res);
      }
    } catch (err) {
      console.error("Error fetching shared wishlists:", err);
    }
  };

  const handleAcceptShare = async (shareToken) => {
    try {
      const response = await fetch(
        // `https://wishlister-h2tf.onrender.com/api/wishlists/confirm-share?shareToken=${shareToken}`,
        `http://localhost:8080/api/wishlists/confirm-share?shareToken=${shareToken}`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(
              `${auth.user.email}:${auth.credentials}`
            )}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();
      if (res) {
        fetchSharedWishlists();
        fetchPendingShares();
      }
    } catch (err) {
      console.error("Error accepting share:", err);
    }
  };

  useEffect(() => {
    if (auth.user) {
      fetchSharedWishlists();
    }
  }, [auth.user, location.pathname]);

  return (
    <div className="shared-wishlist-list-container">
      {pendingShares.length > 0 && (
        <div className="pending-shares">
          <h2>Pending Shares</h2>
          <ul>
            {pendingShares.map((share) => (
              <li key={share.shareToken}>
                <p>{share.senderUserId} would like to share a wishlist with you!</p>
                <span>{share.wishlistName}</span>
                <button onClick={() => handleAcceptShare(share.shareToken)}>
                  Accept
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <WishlistList wishlistItems={wishlistContext.wishlists} isShared={true} />
    </div>
  );
};

export default SharedWishlistListContainer;
